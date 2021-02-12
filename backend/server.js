const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');
const path = require('path');
const express = require('express');
const helmet = require('helmet')
const sass = require('node-sass');
const jsonImporter = require('node-sass-json-importer');
const compression = require('compression');
const config = require('./config.json');
const minify = require('@node-minify/core');
const cssnano = require('@node-minify/cssnano');
const cors = require('cors');
const minist = require('./minification');

const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: false}));
const lookup = {
    "utils": '_utils.scss',
    "res_helpers": '_responsive_helpers.scss',
    "grid": '_raster.scss',
    "forms": '_forms.scss',
    "type": '_typography.scss',
    "layout": '_layout.scss',
    "elements": '_elements.scss',
    "colors": '_colors.scss'
}

const maincss = fs.readFileSync('./main.scss').toString();
console.log(maincss);

app.post('/test', (req, res) => {
    //let request_id = uuidv4();
    console.log(req.body);
    res.send('spirit-4e335647-db10-40c6-9eee-a0a74493232d.css');
})


// TODO: perform error handling (using promises?)
// TODO: Add custom module imports
// TODO: rewrite file writing code to be async
app.post('/', (req, res) => {
    // try{
        let request_id = uuidv4();
        console.log(`New request: ${request_id}`)
        console.log(req.body);

        // create temp config file with user options
        let tempConfig = config
        let basecss = maincss
        fs.appendFileSync(`./temp/main-${request_id}.scss`, basecss)
        fs.appendFileSync(`./temp/main-${request_id}.scss`, `\n@import './temp/config-${request_id}.json';`)
        Object.entries(req.body).forEach(([variable, value]) => {
            tempConfig[variable] = value
            console.log(`Setting variable ${variable} to ${value}`)
            if (value === true && lookup[variable]) {
                fs.appendFileSync(`./temp/main-${request_id}.scss`, `\n@import '../../scss/${lookup[variable]}';`)
            }
        })
    Object.entries(config).forEach(([variable, value]) => {
        if (config[variable] === true) {
            fs.appendFileSync(`./temp/main-${request_id}.scss`, `\n@import '../../scss/${lookup[variable]}';`)
        }
    })
    console.log(`Generated ${request_id}.scss`);
    let newTempConfig = JSON.stringify(tempConfig, null, 2)
    // write file to temp
    fs.writeFile(`./temp/config-${request_id}.json`, newTempConfig, configErr => {
        if (configErr) throw configErr
        // compile scss files using JSON importer
        console.log(`Generated ${request_id}.config`);
        sass.render({
            file: `./temp/main-${request_id}.scss`,
            importer: [jsonImporter()],
            outputStyle: 'compact'
        }, (compile_err, result) => {
            if (compile_err) throw compile_err

            // write output to unminified file
            fs.writeFile(`./temp/spirit-${request_id}.css`, result.css, write_err => {
                if (write_err) throw write_err
                console.log(`Generated ${request_id}.css`);
                // minify the file not working .
                // minify({
                //     compressor: cssnano,
                //     input: `./temp/spirit-${request_id}.css`,
                //     output: `./temp/spirit-${request_id}.min.css`,
                //     callback: (min_err, min) => {
                //         if (min_err) throw min_err
                //         // send minified version to client
                //         res.status(200).send(`spirit-${request_id}.min.css`);
                //         console.log(`spirit-${request_id}.min.css`);
                //         console.log('happened3');
                //     }
                // });
                //mini(request_id);

                // Checks if the file is accessible or not.
                // fs.access('./temp/spirit-${request_id}.css', fs.constants.R_OK, (err) => { 
                //     console.log('\n> Checking Permission for reading the file'); 
                //     if (err) 
                //       console.error('No Read access'); 
                //     else
                //       console.log('File can be read'); 
                //   });
                res.status(200).send(`spirit-${request_id}.css`);
            });
        });
    })
    // }
    // catch(e){
    //     console.log(e);
    // }
});


app.get('/:filename', (req, res) => {
    let filename = req.params.filename;
    console.log(filename)
    res.download(`./temp/${filename}`, 'spirit.css', err => {
        if (err) throw err
        console.log('Sent!')
    })
})

app.listen(8080, () => console.log('CSSify backend listening on port 8080!'));