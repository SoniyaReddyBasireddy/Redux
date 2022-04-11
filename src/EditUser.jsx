import { useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";

export const  EditUser = () =>  {
    //Get UserID
    const { pathname } = useLocation();
    const userId = parseInt(pathname.replace("/edit-user/", ""));
    console.log(userId);
    //Match User ID
    const user = useSelector((state) =>
        state.user.userList.find(user => user.id === userId));
    //Setting up both name and email
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const updateUserName = (props) => {
        setName(props.target.value);
    }

    const updateEmail = (props) => {
        setEmail(props.target.value);
    }

    const dispatch = useDispatch();
    const history = useNavigate();

    const handleClick = () => {
        dispatch({
            type : "UPDATE_USER",
            payload : {"name" : name, "email" : email, "id": userId}
        })
        history("/");
    }
    return (
        <div className="container">
            <div className="row">
                <h3>Update Profile </h3>
            </div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="nameInput">Name</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="test@mailbox.com"
                        id="nameInput"
                        onChange = {updateUserName}
                        value= {name}
                    />
                    <label htmlFor="emailInput">Email</label>
                    <input
                        className="u-full-width"
                        type="email"
                        placeholder="test@mailbox.com"
                        id="emailInput"
                        onChange = {updateEmail}
                        value={email}
                    />


                    <button onClick={handleClick} className="button-primary">
                        Update
                    </button>

                </div>
            </div>
        </div>
    );

}

