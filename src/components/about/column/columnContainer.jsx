import React from 'react';
import Column from "./column";

const ColumnContainer = (props) => {

    let showState = () => {
        props.setPost();
    };

    let editValue = (text) => {
        props.setPostValue(text);
    };

    let setContent = {title: props.title, msg: props.msg};

    return (
        <Column setContent={setContent} showState={showState} editValue={editValue} posts={props.statePosts}/>
    );
};

export const setPostValue = (text) => ({type: 'SET_ARTICLE_VALUE', text: text});
export const setPost = () => ({type: 'SET_ARTICLE_POST'});

export default ColumnContainer;
