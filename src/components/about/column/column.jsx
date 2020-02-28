import React from 'react';
import c from './column.module.css';

class Column extends React.Component {

    constructor(props) {
        super(props);
        this.textMsg = React.createRef();
       console.log(props);
    }

    componentDidMount() {
       /*Событие отрисовки компонента*/
    }

    valueChanges = () => {
        this.props.editValue(this.textMsg.current.value);
    }

    getPostList = () => {
        return  this.props.posts.map((post) => {return <li>{post.msg}</li>});
    }

    render() {
        return (
            <div className={c.column}>
                <div>
                <h2>{this.props.setContent.title}</h2>
                <p>{this.props.setContent.msg}</p>
                <input ref={this.textMsg} name="column" onChange={this.valueChanges}/>
                <button onClick={this.props.showState}>Button</button>
                </div>
                <ul>
                    {this.getPostList()}
                </ul>
            </div>
        );
    }
}

// const Column = (props) => {
//
//     let textMsg = React.createRef();
//
//     let valueChanges = () => {
//         props.editValue(textMsg.current.value);
//     };
//
//     return (
//         <div className={c.column}>
//             <h2>{props.setContent.title}</h2>
//             <p>{props.setContent.msg}</p>
//             <input ref={textMsg} name="column" onChange={valueChanges}/>
//             <button onClick={props.showState}>Button</button>
//         </div>
//     );
// };

export default Column;
