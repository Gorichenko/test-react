import React from 'react';
import ColumnContainer from "./column/columnContainer";
import s from './about.module.css';
import StoreContext from "../../storeContext";
import {connect} from "react-redux";
import {setPost, setPostValue} from "./column/columnContainer";


const About = () => {

    let articles = [
        {id: 1, title: "1st Content Area", msg: "There are many variations of passages of Lorem Ipsum available"},
        {id: 2, title: "2st Content Area", msg: "There are many variations of passages of Lorem Ipsum available"},
        {id: 3, title: "3st Content Area", msg: "There are many variations of passages of Lorem Ipsum available"}
    ];

    let mapStateToProps = (state) => {
        return {
            statePosts: state.valueRd.about.posts,
            statePostValue: state.valueRd.about.postValue
        }
    };

    /*Используется альтернатитва передачив connect*/
    // let mapDispatchToProps = (dispatch) => {
    //     return {
    //         dispatch: dispatch
    //     }
    // };

    const SuperColumnContainer = connect(mapStateToProps, {setPost, setPostValue})(ColumnContainer);

    let articleComponents = articles.map((article) => {
        return <SuperColumnContainer key={article.id} title={article.title} msg={article.msg}/>
    });

    return (
        <div className={s.about}>
                <section className={s.columns}>
                    {articleComponents}
                </section>
        </div>
    );
};

export default About;
