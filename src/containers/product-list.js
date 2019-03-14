import React, { Component } from 'react';
import {connect} from 'react-redux';
import { USER_LIST} from '../store/actionTypes';
import { userModule } from '../api/api';
import {Link} from "react-router-dom";


class ProductList extends Component {
    async componentWillMount() {
        await this.props.allUser()
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
        var users = Object.values(this.props.users)
        if (!this.props.users.lenght === 0) {
            return "No User Found";
        }
        return (
            <div className="userList row">
            {
                users.map((user)=>{
                    return (
                    <div className="col-md-3 userlist" key={user.id}>
                        <div className="w3-card-4">
                            <header className="w3-container w3-light-grey">
                                <h3>John Doe</h3>
                            </header>
                            <div className="w3-container">
                                <img src="../assets/image/user.png" alt="Avatar" className="w3-left w3-circle"/>
                                <p className="overflow">{user.title}</p>
                            </div>
                            <button className="w3-button w3-block w3-dark-grey">
                            <Link 
                                to={{pathname :`/userdeatils/${user.id}`,
                                      state :{user:user.id}}}>+ Connect
                            </Link>
                            </button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}
  function mapStateToProps(state){
    return {
        users : state.User.users
    }
}
 const  mapDispatchToProps = dispatch => ({
    allUser: async () =>  dispatch({
        type: USER_LIST, 
        payload: await userModule.getUser()
    }),
  });

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);