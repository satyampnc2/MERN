import React, { Component } from 'react'
import './main.css'
import axios from 'axios';
class Users extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            age:''
        }
    }

    handlechangle = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }
    adduser = (e) =>{
        e.preventDefault();
        axios.post('/add/user',this.state)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
    }
    render() {
        return (
            <div className="container">
                <form className='form' onSubmit={this.adduser}>
                    <div >
                        <label>Name</label>
                        <input id='name' type="text" name='name' value={this.state.name} onChange={this.handlechangle}/>
                    </div>
                    <div>
                        <label>Age </label>
                        <input id='age' type="text" name='age' value={this.state.age} onChange={this.handlechangle}/>
                    </div>
                    <input type="submit" className='btn' value='submit' onSubmit={this.adduser}/>
                </form>
            </div>
        )
    }
}

export default Users
