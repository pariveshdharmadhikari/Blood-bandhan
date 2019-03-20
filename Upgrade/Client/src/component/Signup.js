import React from 'react';
import {createUser} from '../action';
import {connect} from 'react-redux'
import Form from './Form'
import Header from './Header';
import { toastr } from 'react-redux-toastr';
import history from '../History';

class SignupForm extends React.Component {
    state={flag:true}

    
    
    onSubmit=(formValues)=>{
        formValues.role='author';
        this.props.createUser(formValues);
    }

    render(){
        
        return(<div>
            <Header />
            <h2 style={{textAlign:'center'}}>Signup</h2>
            <Form onSubmit={this.onSubmit}/>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return{
        alldata:state.users
    }
}

export default connect(mapStateToProps,{createUser})(SignupForm);




