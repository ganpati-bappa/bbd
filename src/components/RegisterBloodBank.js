import React from 'react'

//SCSS
import './../SCSS/RegisterBloodBank.scss'

// Components 
import Editbox from './../Components/EditBox.js'
import {BloodComponent} from './../Components/BloodComponent.js'
import {Button} from './../Components/Button.js'

// Images
import Illus1 from './../Assets/hospital.webp'

export const RegisterBloodBank = () => {
    return (
        <div className = "RegisterPage-wrapper">
            <form>
                <div className = "Register-Bank-form-Container">
                    <div>
                        <h3> Blood Bank Register </h3>
                        <Editbox label = "Name of Blood bank" type = "text"></Editbox>
                        <Editbox label = "Address" type = "text"></Editbox>
                        <Editbox label = "Contact No" type = "text"></Editbox>
                    </div>

                    <div>
                        <h5 style = {{color: "#f00946"}}>Availaible blood Components </h5>
                        <div className = "blood-Types">
                            <BloodComponent type = "A"/>
                            <BloodComponent type = "A+"/>
                            <BloodComponent type = "B"/>
                            <BloodComponent type = "B+"/>
                            <BloodComponent type = "AB"/>
                            <BloodComponent type = "AB+"/>
                            <BloodComponent type = "O+"/>
                            <BloodComponent type = "O-"/>
                            <BloodComponent type = "Platlets"/>
                        </div>
                    </div>

                    <div className = "Register-btn-container">                        
                        <Button buttonColor = "green" buttonSize = "btn--mobile">Register</Button>
                    </div>
                </div>
            </form>

            <div>
                <img src = {Illus1}></img>
            </div>

        </div>
    )

}

export default RegisterBloodBank