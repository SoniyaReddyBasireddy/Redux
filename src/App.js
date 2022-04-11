import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import UserListView from "./getUsersList";
import { EditUser } from "./EditUser";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <Provider store = { store } >
        <Router>
          <div>
              <Link to="/">
                <button class = "button-primary">Home</button>
              </Link>
              <Routes>
              <Route path="/" element={<UserListView />}></Route>
              <Route path="/edit-user/*" element={<EditUser />}></Route>
              </Routes>
          </div>
        </Router>
      </Provider>
  );
}

export default App;