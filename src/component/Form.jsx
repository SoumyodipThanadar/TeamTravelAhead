import React from "react";

const Form = () =>{
    return(
        <>
        <h1>REGISTRATION FORM</h1>
        <form>
            <label>Name</label>
            <input type = "text" name ="name" placeholder = "Enter Your Name"></input><br></br><br></br>
            <label>Telephone Number</label>
            <input type = "number" name = "telephone" placeholder = "Enter Your Telephone Number"></input><br></br><br></br>
            <label>Email Id</label>
            <input type = "email" name = "email" placeholder = "Enter Your Email Id"></input><br></br><br></br>
            <label>Gender</label>
            <input type = "radio" name="gender" value={'male'}></input>Male
            <input type = "radio" name="gender" value={'female'}></input>Female
            <input type = "radio" name="gender" value={'others'}></input>Others<br></br><br></br>
            <label>Religion </label>
            <select>
                <option disabled selected value={''}>----Select Religion----</option>
                <option value={'hindu'}>Hindu</option>
                <option value={'islam'}>Islam</option>
                <option value={'others'}>Others</option>
            </select><br></br><br></br>

            <label>Message</label>
            <textarea></textarea><br></br><br></br>


            <label>File</label>
            <input type="file"></input><br></br><br></br>

            <button type="submit">Submit</button><br></br>
            
            




        </form>
        </>
    )
}
export default Form;