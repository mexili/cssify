const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');
const express = require('express');
const helmet = require('helmet')
const sass = require('node-sass');
const jsonImporter = require('node-sass-json-importer');
const compression = require('compression');
const config = require('./config.json');
const minify = require('@node-minify/core');
const cssnano = require('@node-minify/cssnano');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());

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

const maincss = fs.readFileSync('./main.scss').toString()

// TODO: perform error handling (using promises?)
// TODO: Add custom module imports
// TODO: rewrite file writing code to be async
app.post('/', (req, res) => {
    let request_id = uuidv4()

    // create temp config file with user options
    let tempConfig = config
    let basecss = maincss
    fs.appendFileSync(`./temp/main-${request_id}.scss`, basecss)
    fs.appendFileSync(`./temp/main-${request_id}.scss`, `\n@import './temp/config-${request_id}.json';`)
    Object.entries(req.body).forEach(([variable, value]) => {
        tempConfig[variable] = value
        console.log(`Setting variable ${variable} to ${value}`)
        if (tempConfig[variable] == true && lookup[variable]) {
            fs.appendFileSync(`./temp/main-${request_id}.scss`, `\n@import '../../scss/${lookup[variable]}'`)
        }
    })
    let newTempConfig = JSON.stringify(tempConfig, null, 2)
    // write file to temp
    fs.writeFile(`./temp/config-${request_id}.json`, newTempConfig, configErr => {
        if (configErr) throw configErr
        // compile scss files using JSON importer
        sass.render({
            file: `./temp/main-${request_id}.scss`,
            importer: [jsonImporter()],
            outputStyle: 'compact'
        }, (compile_err, result) => {
            if (compile_err) throw compile_err
            // write output to unminified file
            fs.writeFile(`./temp/spirit-${request_id}.css`, result.css, write_err => {
                if (write_err) throw write_err
                // minify the file
                minify({
                    compressor: cssnano,
                    input: `./temp/spirit-${request_id}.css`,
                    output: `./temp/spirit-${request_id}.min.css`,
                    callback: (min_err, min) => {
                        if (min_err) throw min_err
                        // send minified version to client
                        res.download(`./temp/spirit-${request_id}.min.css`, download_err => {
                            // clean-up temp files
                            fs.unlink(`./temp/spirit-${request_id}.min.css`, () => {console.log(`${request_id} cleaned (1/3)`)})
                            fs.unlink(`./temp/spirit-${request_id}.css`, () => {console.log(`${request_id} cleaned (2/3)`)})
                            fs.unlink(`./temp/main-${request_id}.scss`, () => {console.log(`${request_id} cleaned (3/3)`)})
                            if (download_err) throw download_err
                        })
                    }
                });
            });
        });
    })
})

app.listen(3000, () => console.log('CSSify listening on port 3000!'));
