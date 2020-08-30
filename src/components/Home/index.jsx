import React, {Component} from 'react';


export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            user:'',
            pass:'',
            type:''
        };
        this.sendUser = this.sendUser.bind(this);
        this.capture = this.capture.bind(this);
    }

    sendUser () {
        if(this.state.user.length == 0 || this.state.pass.length == 0)
            alert('All the fields are needed');
        else {
            fetch('/register',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data=> {
                    console.log(data);
                    alert('User Registered');
                })
                .catch((err)=> {console.log(err);})
            this.setState({user:'',pass:'',type:''});
        }    
                
    }

    capture(e) {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        });
    }
    
       render(){
       return(
           <div className='container'>
               <div className='col-12'>
                    <div className='card'>
                        <form action='/register' method='POST'>
                            <div className='card-header'>
                                <h2 className='text-center'>Registered now </h2>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <label htmlFor='user'>User</label>
                                    <input type='text' name='user' onChange={this.capture} value={this.state.user} id='user' placeholder='User' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='pass'>Password</label>
                                    <input type='password' name='pass' onChange={this.capture} value={this.state.pass} id='pass' placeholder='Password' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="type">Select one type of user</label>
                                    <select name="type" id="type" className='form-control' onChange={this.capture}>
                                        <option value="" disabled selected>Select one type of user</option>
                                        <option value="U">User</option>
                                        <option value="D">Developer</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <button type='submit' className='btn btn-outline-info'  onClick={this.sendUser}>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
 
                </div>
           </div>
        )
   }
}