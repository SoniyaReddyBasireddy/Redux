import React from "react";
import { connect } from "react-redux";
import * as actions from "./UserActions";
import {Link} from "react-router-dom";

const UserListView = (props) => {
   const { userList } = props;
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Redux CRUD User app</h1>
                </div>
                <div className="row">
                    <div className="two columns">
                        <Link to={`/`}>
                            <button className="button-primary">Load users</button>
                        </Link>
                    </div>
                    <div className="two columns">
                        <button className="button-primary">Add user</button>
                    </div>
                </div>
                <div className="row">
                    <table className="u-full-width">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        {userList.map((user) => (
                            <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button href= "/edit-user">Delete</button>
                                    <Link to={`/edit-user/${user.id}`}>
                                        <button>Edit</button>
                                    </Link>

                                </td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log("state:::", state);
    const { userList } = state.user;
    return { userList };
};

export default connect(mapStateToProps, actions)(UserListView);