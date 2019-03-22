import React from "react";
import Title from "../TitleComponent";
import Content from "../ContentComponent";
import {Link} from "react-router-dom";
import "./Article.css";

function Article(props) {
  return (
    <div className="article">
      <Title articleId={props.articleId} title={props.title} createdAt={props.createdAt} />
      <Content content={props.content} />
    </div>
  );
}

export default Article;
