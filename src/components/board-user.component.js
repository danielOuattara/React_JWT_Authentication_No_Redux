
import React, {Component} from 'react';
import UserService from '../services/user.service';

export default class BoardUser extends Component {
    constructor(props){
        super(props);
        this.state= { content: ""}
    }

    componentDidMount() {
        UserService.getUserBoard()
        .then( res => {
            this.setState({ cotent: res.data});
        })
        .catch( err =>{
            this.setState({
                content:  (err.response && err.response.data) || err.message ||  err.toString()
            })
        })
    }

    render(){
        return(
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
        )
    }
}