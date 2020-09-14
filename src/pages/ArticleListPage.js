import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Articles.css";

//TODO: fetch calls.
const Articles = [
  {
    userID: 1,
    username: "yolo",
    text: "This article is short.",
  },
  {
    userID: 2,
    username: "zum_zum",
    text: "Man, this article is so long ow mah gawd!!",
  },
  { userID: 1, username: "yolo", text: "This article is boring." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
  { userID: 2, username: "zum_zum", text: "This article is a copy." },
];

const Users = [
  { userID: 1, username: "yolo", email: "yo@lo.com" },
  { userID: 2, username: "zum_zum", email: "zum@zum.dk" },
];

//TODO: Match userID to username.

class ArticleListPage extends Component {
  state = { articleData: Articles, userData: Users };

  removeArticle = (index) => {
    const articles = this.state.articleData;

    this.setState({
      articleData: articles.filter((articles, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const table = this.state.articleData.map((row, index) => {
      const userLink = `users/${row.userID}`;
      return (
        <div className="entry" key={index}>
          <h3>{row.text}</h3>
          <Link to={userLink}>Written by {row.username}</Link>
          <button onClick={() => this.removeArticle(index)}>Delete</button>
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

export default ArticleListPage;
