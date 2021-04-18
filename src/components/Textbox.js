import React from 'react'
import '../scss/Textbox.scss'

const Textbox = ({if_2, string1, string2, string}) => {

    const checkType = (if_2) ? if_2 : "false";

    return (
        <div>
            {
                (if_2 == "true") ? (
                    <div className = "TextBox1">
                        <div>{string1}</div>
                        <div>{string2}</div>
                    </div>
                ): (
                    <div className = "TextBox2">
                    </div>
                ) 
            
            }
        </div>
    )
}

export default Textbox