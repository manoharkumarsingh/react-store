import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  } from '../store/actionTypes';
import { USER_SELECTED,COMMENT_USER} from '../store/actionTypes';
import { userModule,commentModule } from '../api/api';
import {NavLink} from "react-router-dom";
import $ from 'jquery';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : {
                content:''
            },
            modalShow : false
        }
        this.handleComment =  this.handleComment.bind(this);
        this.handleChange =  this.handleChange.bind(this);
        
    }

    handleChange(){
        this.setState({
            content : {content: this.refs.content.value}
        }); 
      
    }

    async handleComment(userid){ 
        await this.props.commentUser(userid,this.state.content)
        this.setState({
            content : {content: ''}
        }); 
        $('#myModal').modal('hide');
        
    }
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
        if(this.props.user){
            return (
                <div className="container">
                    <div className="well">
                        <div className="w3-container w3-center">
                            <img src="../assets/image/user.png" alt="Avatar" className="w3-circle"/>
                        </div>
                        <p><b>Title  : </b>{this.props.user[0]['title']}</p>
                        <p><b>Content  : </b>{this.props.user[0]['content']}</p>
                        <div className="row">
                            <div className="col-md-4"><NavLink className="btn btn-primary" to={'/'}>Go to Home</NavLink></div>
                            <div className="col-md-4">
                                <NavLink className="btn btn-primary"  to={{pathname :`/adduser/${this.props.user[0]['_id']}`,
                                state :{user:this.props.user[0]['_id']}}}>
                                Update Details
                            </NavLink>
                            </div>
                            
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" >Comment</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">User Details</h4>
                            </div>
                            <div className="modal-body">
                                <div align="center"><img src="../assets/image/user.png" alt="Avatar"/></div>
                                <p><b>Title  : </b>{this.props.user[0]['title']}</p>
                                <p><b>Content  : </b>{this.props.user[0]['content']}</p>
                                <div className="form-group">
                                    <label htmlFor="body">Comment : </label>
                                    <input type="text" className="form-control" value={this.state.content.content} onChange={this.handleChange} ref="content"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=>this.handleComment(this.props.user[0]['_id'])}>Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
               <h1>User Not Found</h1>
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
    }),
    commentUser: async (user, comment) =>  dispatch({
        type: COMMENT_USER, 
        payload: await commentModule.commentUser(user, comment)
    }),
  });

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);