import React, { Component } from "react";
import { Link } from "react-router-dom";
import EntryEdit from "../components/EntryEdit";
import "../css/Articles.css";

class ArticleList extends Component {
  state = { articleData: this.props.articles };

  removeArticle = (index) => {
    const articles = this.state.articleData;

    this.setState({
      articleData: articles.filter((articles, i) => {
        return i !== index;
      }),
    });
  };

  setArticle = (text, id) => {
    const newArticleData = this.state.articleData;
    newArticleData[id].text = text;

    this.setState({
      articleData: newArticleData,
    });
  };

  render() {
    const table = this.state.articleData.map((row, index) => {
      const userLink = `users/${row.userID}`;

      return (
        <div className="entry" key={index}>
          {/*TODO: Change between edit bar and fixed row.*/}
          <h3>
            <EntryEdit
              text={row.text}
              id={index}
              submit={(text, id) => this.setArticle(text, id)}
            />
            {row.text}
          </h3>
          <Link to={userLink}>Written by {row.username}</Link>
          <button onClick={() => this.removeArticle(index)}>Delete</button>
          <hr />
        </div>
      );
    });

    return (
      <>
        <h1>Articles</h1>
        {table}
      </>
    );
  }
}

export default ArticleList;
