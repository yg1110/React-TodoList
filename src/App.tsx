import React from "react";
import { TodoList, Test } from "./router";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "./style/Header.scss";

const navigationItems: Array<string> = ["Home", "Style"];
const title: String = "TodoList";

const App = () => {
  return (
    <>
      <header>
        <h1 className="header__title">{title}</h1>
      </header>
      <BrowserRouter>
        <nav>
          <ul className="nav__navigation">
            {navigationItems.map((navigationItem, i) => {
              return (
                <li key={navigationItem + i}>
                  <Link
                    className="nav__naviagtion--nav-text"
                    to={"/" + navigationItem}
                  >
                    {navigationItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/Home" component={TodoList}></Route>
            <Route path="/Style" component={Test}></Route>
            <Redirect path="*" to="/Home" />
          </Switch>
        </section>
      </BrowserRouter>
    </>
  );
};

export default App;
