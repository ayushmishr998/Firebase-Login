import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fire from './config/Fire';
class Login extends Component{
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.signup = this.signup.bind(this);

		this.state={
			email:'',
			password:''
		}
	}
	login(e){
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{
			console.log("email pass checking",u);
		}).catch((error) => {
			console.log(error);
			alert("Incorrect email and password");
		})
	}
	signup(e){
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
		.catch((error) => {
			console.log(error);
		})
	}
	handleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});
	}
	render(){
		return(
			<div>
			<form>
			<div>
			<label className="label">Email Address:</label>
			<input type="email" label="Email id" name="email" className="emailType" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
			</div>
			<div>

			<label>Password</label>
			<input type="password" name="password" className="passType" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" />

			</div>
			<button type="submit" onClick={this.login}>Login</button>
			<button  onClick={this.signup}>SignUp</button>

			</form>
			</div>
			);
	}
}
export default Login;