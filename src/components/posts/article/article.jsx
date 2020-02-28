import React from 'react';
import a from './article.module.css';

const Article = (props) => {

    let textMsg = React.createRef();

    let valueChanges = () => {
        props.editValue(textMsg.current.value);
    };

    let getPostList = props.posts.map((post) => {return <li>{post.msg}</li>});

    return (
        <div className={a.column}>
            <h2>{props.setContent.title}</h2>
            <p>{props.setContent.msg}</p>
            <input ref={textMsg} name="column" onChange={valueChanges}/>
            <button onClick={props.showState}>Button</button>
            <ul>
                {getPostList}
            </ul>
        </div>
    );
};

export default Article;
