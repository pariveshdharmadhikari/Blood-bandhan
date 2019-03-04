import React, { Component } from 'react';
import './css/SignupBody.css';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import {SignupForm} from './actions'

class SignupBody extends Component {

  renderError({error,touched}){
    if(touched && error){
        return(
            <div className='ui error message'>
            <div className=''>{error}</div>
            </div>
        );
    }
}

  renderInput=({ input,label,meta,placeholder})=> {
    const className=`field ${meta.error && meta.touched ?'error':''}`
    return (
        
        <div className={className}>
            <label >{label}</label><br/>
            <input placeholder={placeholder} {...input} style={{width: "400px"}}/>
            {this.renderError(meta)}
        </div>
    )
}

onSubmit=(formValues)=>{
  this.props.SignupForm(formValues); 
}

  render() {
    return (
      <div className="signupcontainer">
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="FirstName" component={this.renderInput} label="Enter Name" placeholder="Enter Your Name"/>
        <Field name="LastName" component={this.renderInput} label="Enter Location" />
        <Field name="bloodgroup" component={this.renderInput} label="Enter Blood Group" />
        <button className="ui button primary">Submit</button>
      </form>
      </div>
    );
  }
}

const validate =(formValues)=>{
  const errors={}
  if(!formValues.FirstName){
      errors.FirstName='Please Enter FirstName'
  }
  if(!formValues.LastName){
      errors.LastName='Please Enter LastName'
  }
  if(!formValues.bloodgroup){
    errors.bloodgroup='Please Enter bloodgroup'
  }
  return errors;
}

const wrapedform =reduxForm({
  form: 'SignUpForm',
  validate
})(SignupBody);

export default connect (null,{SignupForm})(wrapedform)