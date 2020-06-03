import React from 'react';
import Form from "@rjsf/core";
import formSchema from '../models/FormSchema'


const log = (type) => console.log.bind(console, type);

const ReactForm = ()=> {
    return (
        <div>
            <Form schema={formSchema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")} />
        </div>
    )
}

export default ReactForm;