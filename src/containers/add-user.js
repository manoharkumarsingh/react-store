import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ADD_USER} from '../store/actionTypes';
import { userModule} from '../api/api';
import { alertmesage} from '../store/alertmessage';

class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            body : '',
            userId : 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm =  this.handleSubmitForm.bind(this);
        this.alertMessage = '';
    }
    handleChange(event) {
        this.setState({
            title : this.refs.title.value,
            body : this.refs.body.value,
            userId : 1
        });
    }
   
    async handleSubmitForm(event){
       event.preventDefault();
       await this.props.adduser(this.state)
       var status = this.props.addeduser.status;
       alertmesage.createNotification(status,"User "+this.props.addeduser.data.title+" created ")
       if(status === 201){
        this.setState({
            title : '',
            body : '',
            userId : 1
          });
        this.props.history.push("/");
      }
     
    }
  
    render(){
        return(
            <div className="container">
              <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8 well">
                    <form onSubmit={this.handleSubmitForm}>
                        <input type="hidden" className="form-control" id="userid" value="1" name="userid"/>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange} ref="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <input type="text" className="form-control" value={this.state.body} onChange={this.handleChange} ref="body"/>
                        </div>
                        <button type="button" onClick={this.handleSubmitForm} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        addeduser:state.User.addedUsers
    }
}
const  mapDispatchToProps = dispatch => ({
    adduser: async (userdetails) =>  dispatch({
        type: ADD_USER, 
        payload: await userModule.addUser(userdetails)
    })
  });

export default connect(mapStateToProps,mapDispatchToProps)(Adduser);