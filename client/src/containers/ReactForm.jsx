import React from 'react';
import Form from "@rjsf/core";
import formSchema from '../models/FormSchema'
import {blue} from '../store.js';
import {useRecoilState} from 'recoil';


const log = (type) => console.log.bind(console, type);

const ReactForm = ()=> {
    const [bgcolor, setBgColor] = useRecoilState(blue);



    return (
        <div>
            <Form schema={formSchema}
                onChange={log("HEllo WOrl")}
                onSubmit={({formData}, e)=>{
                    setBgColor(formData.blue)
                    console.log(formData)

                }}
                onError={log("errors")} />
        </div>
    )
}

export default ReactForm;