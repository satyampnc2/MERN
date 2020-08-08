import React, { Component } from 'react'
import '../components/register.css'
import axios from 'axios';
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            username:'',
            password:''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(e){
        e.preventDefault();
        const email = document.getElementsByName('email')[0].value;
        const username = document.getElementsByName('username')[0].value;
        const password = document.getElementsByName('password')[0].value;
        await this.setState({email:email,username:username,password:password});
        axios.post('/user/register',this.state)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
        window.location.href = '/login'
    }
    componentDidMount(){
        axios.get('/user/')
        .then(res=>res.data)
        .then(res=>res.forEach(user => {
            console.log(user);  
        }))
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div className="container register">
                <form className='form' onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Email Address</label>
                        <input placeholder="Enter email" className="form-control" type="email" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label> Username</label>
                        <input placeholder="Enter username" className="form-control" type="text" name="username" id="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input placeholder="Enter password" className="form-control" type="password" name="password" id="password"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" onSubmit={this.onSubmit} className='btn btn-primary'/>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Register
