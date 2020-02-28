import React from 'react';
import c from '../user.module.css';

class UserList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        /*Событие отрисовки компонента*/
    }

    render() {
        return (
            <div className={c.column}>

            </div>
        );
    }
}

export default UserList;
