import React,{Component} from 'react';
import Dashboard from './Dashboard';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'mingming',
            password:'ming2',
            Submit: false,
        }       
    }
    SubmitFormHandler=(e)=>{
        const{username,password}=this.state;
        if(username==='mingming' || password==='ming2'){
            this.setState( {Submit:true});
        
        }
        else {
            alert('Opps!!Invalid Credentials!');
        }
    }
    render(){
        if (!this.state.Submit){
            return(
                <div id="top">
                <h1>Log In Form</h1>
                    UserName: 
                    <input type="text" placeholder="Enter username.." onChange={e=>this.setState({username:e.target.value})}></input><br></br>
                    Password: 
                    <input type="text" placeholder="Enter password.." onChange={e=>this.setState({password:e.target.value})}></input><br></br>
                    <button type="button" onClick={e=>this.SubmitFormHandler(e)}>Submit</button>
                </div>
            )
        }
        else{
            return(
                <Dashboard/>
            )
        } 
    }
}
export default Login;