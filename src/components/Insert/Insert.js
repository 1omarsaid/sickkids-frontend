import React from 'react'
import './Insert.css'
import { Button } from "@material-ui/core"

function Insert() {



    
    return (
        <div className="insert">
            <h1>Insert Patient Data</h1>
            <div className="firstName">
                <label>First Name</label>
                <input type="text" name="fname"  id="fname" placeholder="First Name"/>
            </div>
            <div className="lastName">
                <label>Last Name</label>
                <input type="text" name="lname"  id="lname" placeholder="Last Name"/>
            </div>
            <div className="email">
                <label>Email Address</label>
                <input type="email" name="email"  id="email" placeholder="Email"/>
            </div>
            <div className="dob">
                <label>Date of Birth</label>
                <input type="text" name="dob"  id="dob" placeholder="Date of birth"/>
            </div>
            <div className="phoneNumber">
                <label>Date of Birth</label>
                <input type="text" name="phoneNumber"  id="phoneNumber" placeholder="Phone Number"/>
            </div>
            <div className="homeAddress">
                <label>Date of Birth</label>
                <input type="text" name="homeAddress"  id="homeAddress" placeholder="Home Address"/>
            </div>
            <div className="submit">
                <p onClick={() => this.registerPatient()}>Already have an account? Sign In</p>
            </div>
            <Button 
                onClick={() => this.registerPatient()}
                // className="banner_searchButton" 
                variant="outlined">
                    Submit
            </Button>
        </div>
    )
}

export default Insert
