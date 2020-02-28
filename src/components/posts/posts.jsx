import React from 'react';
import ArticleContainer from "./article/articleContainer";
import s from './posts.module.css';
import {connect} from "react-redux";
import {setPostValue, setPost} from "./article/articleContainer";

const Posts = () => {

    let posts = [
        {id: 1, title: "1st Article", msg: "There are many variations of passages of Lorem Ipsum available"},
        {id: 2, title: "2st Article", msg: "There are many variations of passages of Lorem Ipsum available"},
        {id: 3, title: "3st Article", msg: "There are many variations of passages of Lorem Ipsum available"}
    ];

    let mapStateToProps = (state) => {
        //console.log(state.postRd)
        return {
            statePosts: state.postRd.post.posts,
            statePostValue: state.postRd.post.postValue
        }
    };

    /*Используется альтернатитва передачив коннект*/
    // let mapDispatchToProps = (dispatch) => {
    //      return {
    //          dispatch: dispatch
    //      }
    // };

    const SuperArticleContainer = connect(mapStateToProps, {setPost, setPostValue})(ArticleContainer);

    let postComponents = posts.map((post) => {
        return <SuperArticleContainer key={post.id} title={post.title} msg={post.msg} />
    });

    return (
        <div className={s.about}>
                <section className={s.columns}>
                    {postComponents}
                </section>
        </div>
    );
};

export default Posts;
