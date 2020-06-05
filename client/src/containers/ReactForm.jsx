import React from 'react';
import Form from "@rjsf/core";
import formSchema from '../models/FormSchema'
import {blue, formSchemaObject} from '../store.js';
import {useSetRecoilState} from 'recoil';

import * as _ from 'lodash';


const log = (type) => console.log.bind(console, type);

const ReactForm = ()=> {
    const  setFormSchemaObject = useSetRecoilState(formSchemaObject);
    const  setBgColor = useSetRecoilState(blue);
    const updateForm = _.debounce(async ({formData}, e) => {
        // if(JSON.stringify(formData)!==JSON.stringify(getFormSchemaObject)) {
            setFormSchemaObject(formData)
            console.log(formData)
        // }
    })


    let schema = {...formSchema}
    return (
        <div>
            <Form schema={schema}
                onChange={updateForm}
                onSubmit={({formData}, e)=>{
                    e.preventDefault();
                    setBgColor(formData.blue)
                    console.log(formData)

                }}
                onError={log("errors")} />
        </div>
    )
}

export default ReactForm;