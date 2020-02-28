import React from 'react';
import c from './user.module.css';
import * as axios from "axios";
import UserListContainer from "./list/userListContainer";

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /*Событие отрисовки компонента*/
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className={c.column}>
                <div>
                    <UserListContainer props={this.props}/>
                </div>
            </div>
        );
    }
}

export default User


