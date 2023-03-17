import { Component, createRef } from "react";
import {v4 as uuid} from "uuid";
import CryptoJS from "crypto-js";
import "../styles/authantication.scss"

export default class Auth extends Component{
    constructor(){
        super();
        let localUser = localStorage.getItem("userData");
        this.state={

            users:localUser ? JSON.parse(localUser) : [],
            loggedInUser:null
          
        };

       this.registerRef = createRef()
       this.loginRef = createRef()

    }
    register = (event) =>{
    event.preventDefault();
        let password = this.registerRef.current.password.value;
    const userData = {
        name: this.registerRef.current.name.value,
        // phone: this.registerRef.current.phone.value,
        email: this.registerRef.current.email.value,
        password: CryptoJS.AES.encrypt(password, "********").toString(),
        id:uuid().split("-").join()
    };
    
    localStorage.setItem("userData",JSON.stringify([...this.state.users,userData]));
    this.setState({
        ...this.state,
        users:[...this.state.users, userData]
    });
}


login = (event) =>{
    event.preventDefault();
    
    const userData = {
        email: this.loginRef.current.email.value,
        password: this.loginRef.current.password.value
    };

    const tempUser = this.state.users.filter (e=> e.email == userData.email);
    if(tempUser.length){
        var bytes = CryptoJS.AES.decrypt(tempUser[0].password,"********");
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        if(originalText == userData.password){
            this.setState({
                ...this.state,
                loggedInUser:tempUser[0]

            });
        }
        else{
            console.log("wrong password");
        }
    }
    else{
        console.log("wrong email");
    }
};

    render(){
        return(
            <div className="auth-container">
                <div className="myprofile">
                    <h1>My Account</h1>
                </div>
            <div className="login-signup">    
            <div className="register">
                <h2>REGISTER</h2>
                <form ref={this.registerRef}>
                    <div><p>Username</p>
                    <input name="name" type="text" placeholder="username" required/></div>
                    {/* <label htmlFor="phone">Phone: </label>
                    <input name="phone"/><br/> */}
                   <div><p>Email Address</p>
                    <input name="email" type="email" placeholder="@gmail.com" required/></div>
                    <div><p>Password</p>
                    <input name="password" type="text" required placeholder="password"/></div>
                    <button type="submit" onClick={this.register}>Register</button>
                </form>
            </div>
            <div className="login">
                <h2>LOGIN</h2>
                <form ref={this.loginRef}>
                    <div>
                    <p>email</p>
                    <input name="email" type="email" placeholder="@gmail.com" required/>
                    </div>
                   <div>
                   <p>Passsword</p>
                    <input name="password" type="text" required placeholder="password"/>
                   </div>
                    <button type="submit" onClick={this.login}>Login</button>
                </form>
            </div>
            </div>
           
            </div>
        )
    }
}