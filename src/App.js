import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//Paging, components
import ArticleListPage from "./pages/ArticleListPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserListPage from "./pages/UserListPage";
import UserPage from "./pages/UserPage";
//CSS
import "./css/App.css";
import NavBar from "./components/NavBar";

//TODO: fetch calls in the relevant pages.
const Articles = [
  {
    userID: 1,
    text: "This article is short.",
  },
  {
    userID: 2,
    text: "Man, this article is so long ow mah gawd!!",
  },
  { userID: 1, text: "This article is boring." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
  { userID: 2, text: "This article is a copy." },
];

const Users = [
  { userID: 1, username: "yolo", email: "yo@lo.com" },
  { userID: 2, username: "zum_zum", email: "zum@zum.dk" },
];

const App = () => {
  const [users, setUsers] = useState({ Users });
  const [articles, setArticles] = useState({ Articles });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="ContentBody">
          <Switch>
            <Route path="/" exact>
              <ArticleListPage
                userData={users}
                setUserData={setUsers}
                articleData={articles}
                setArticleData={setArticles}
              />
            </Route>
            <Route path="/articles" component={ArticleListPage} />
            <Route path="/users/" component={UsersRoute} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const UsersRoute = () => {
  return (
    <>
      <Switch>
        <Route path="/users/" exact component={UserListPage} />
        <Route path="/users/:user" component={UserPage} />
      </Switch>
    </>
  );
};

export default App;

/*1.	List all articles (posts) with a limit of 25 articles per page 
a)	It must be possible to switch pages to view articles on the following pages 
b)	It must be possible to edit or delete an article 
c)	It must be possible to search for an article by writing one word (a single word) of its content in a search bar. 
2.	List all users 
a)	It must be possible to view all articles written by a user 
b)	It must be possible to display a user's details (full address, e-mail and username). 
c)	It must be possible to search for a user by his or her first or last name. 
 */
