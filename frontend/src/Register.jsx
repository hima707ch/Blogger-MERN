import "./public/styles.css"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

function Register() {

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        c_password: ""
    });
    const [status, setStatus] = useState("");


    function change(event) {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }


    function handleClick(event) {
        axios.post("/register", registerData).then(res => {
            //userData = res.data;

            console.log(res.data.message);
            setStatus(res.data.message);
        })
        //navigate("/profile")

        setRegisterData({
            name: "",
            email: "",
            password: "",
            c_password: ""
        })

        event.preventDefault();

    }



    return (
        <div className="register">

            <div className="home" >
                <center> <br /><h1>Sign Up</h1>
                    <br /><br />
                    <h3>{status}</h3>
                </center>

                <center>

                    <br /><br />
                    <input name="name" placeholder="Name" onChange={change} value={registerData.name} />  <br /><br />
                    <input name="email" placeholder="Email" onChange={change} value={registerData.email} /> <br /><br />
                    <input name="password" type="password" placeholder="Password" onChange={change} value={registerData.password} /> <br /><br />
                    <input name="c_password" type="password" placeholder="Confirm Password" onChange={change} value={registerData.c_password} /> <br /><br />
                    <button className="btn3" type="submit" onClick={handleClick}> submit </button>
                    <br /><p>or</p><br />

                    <NavLink to="/login"> <button className="btn3">Sign In</button> </NavLink>

                </center>

            </div>

        </div>
    );
}

export default Register;
