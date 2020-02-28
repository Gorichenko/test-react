import React from 'react';
import Article from "./article";

const ArticleContainer = (props) => {

    let showState = () => {
        props.setPost();
    };

    let editValue = (text) => {
        props.setPostValue(text);
    };

    let setContent = {title: props.title, msg: props.msg};

    return (
        <Article setContent={setContent} showState={showState} editValue={editValue} posts={props.statePosts}/>
    );
};

export const setPostValue = (text) => ({type: 'SET_POST_VALUE', text: text});
export const setPost = () => ({type: 'SET_POST_POST'});

export default ArticleContainer;
