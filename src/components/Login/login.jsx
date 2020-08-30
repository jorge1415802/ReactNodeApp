import React,{Component} from 'react';

export default class Login extends Component {
    constructor(){
        super();
        this.state=({
            username:'',
            password:'',
        });
        this.capture = this.capture.bind(this);
        this.singin = this.singin.bind(this);
    }

    singin() {
        if(this.state.username.length == 0 || this.state.password.length == 0)
            alert('All the fields are needed');
        else {
            fetch('/login',{
                method:'POST',
                body:JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then((res) => res.json())
            .then(data=> {
                console.log(data);
            })
            .catch((err)=> {console.log(err);})
        this.setState({username:'',password:''});
        }    
    }    

    capture(e) {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
        console.log(this.state);
    }
    
    render(){
        return(
            <div className='container mx-auto'>
                <div className='card'>
                    <form action='/login' method='POST'>  
                        <div className='card-header'>
                            <h2>Sing Up</h2>
                        </div>
                        <div className='card-body'>
                            <div className='form-group'>
                                <label htmlFor="username">User</label>
                                <input type='text' name='username' id='username' onChange={this.capture} placeholder='User' className='form-control'></input>
                            </div>
                            <div className='form-group'> 
                                <label htmlFor="password">Password</label>
                                <input type='password' name='password' id='password' onChange={this.capture} placeholder='Password' className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-outline-info' onClick={this.singin}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}