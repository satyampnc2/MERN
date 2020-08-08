import React,{Component} from 'react'
import '../components/login.css'
import axios from 'axios'
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.onsubmit = this.onsubmit.bind(this);
    }
    async onsubmit(e){
        e.preventDefault();
        const username = document.getElementsByName('username')[0].value;
        const password = document.getElementsByName('password')[0].value;
        await this.setState({username:username,password:password});
        axios.post('/user/login',this.state)
        .then(res => {
            console.log(res);
            if(res.status===400){
                console.log('kuch gadbag h daya');
            } else{
                console.log(res.data);
            }
        })
        .catch(err=>console.log('error is : '+err));
        
    }
    render() {
        return (
            <div className="container login">
                <form className='form' onSubmit={this.onsubmit}>
                <div className="form-group">
                    <label> Username</label>
                    <input placeholder="Enter username" className="form-control" type="text" name="username" id="email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Enter password" className="form-control" type="password" name="password" id="email"/>
                </div>
                <div className="form-group">
                        <input type="submit" onSubmit={this.onsubmit} className='btn btn-primary'/>
                </div>
            </form>
            </div>
            
        );
    }
}


export default Login
