import React from "react";

function ContactCard (props)
{
   
    return(
        <div >
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.Email}</p>
        </div>
    )

}

export default ContactCard