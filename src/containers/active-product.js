import React, { Component } from 'react';
import {connect} from 'react-redux';
import { USER_SELECTED } from '../store/actionTypes';
import { userModule } from '../api/api';
import {NavLink} from "react-router-dom";


class ProductDetail extends Component {
    async componentWillMount() {
        const userid = this.props.location.state.user;
        await this.props.selectedUser(userid)
     }
     componentDidMount() {
        
     }
     componentWillReceiveProps(newProps) {    
        
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
      
     }
     componentDidUpdate(prevProps, prevState) {
       
     }
     componentWillUnmount() {
        
     }
    render(){
        return (
            <div className="container">
                <div className="well">
                    <div className="w3-container w3-center">
                        <img src="../assets/image/user.png" alt="Avatar" className="w3-circle"/>
                    </div>
                    <p><b>Id  : </b>{this.props.user.id}</p>
                    <p><b>User Id  : </b>{this.props.user.userId}</p>
                    <p><b>Title  : </b>{this.props.user.title}</p>
                    <p><b>Body  : </b>{this.props.user.body}</p>
                    <div className="w3-center"><NavLink className="btn btn-primary" to={'/'}>Go to Home</NavLink></div>
                </div>
              
            </div>
        );
       
    }
    
}

function mapStateToProps(state){
    return {
        user : state.User.selectedUsers,
        addeduser:state.User.addedUsers
    }
}
 const  mapDispatchToProps = dispatch => ({
    selectedUser: async (user) =>  dispatch({
        type: USER_SELECTED, 
        payload: await userModule.selectedUser(user)
    })
  });

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);