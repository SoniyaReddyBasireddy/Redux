export const updateUser = (userId, name, email) => {
    return (dispatch, getState) => {
        dispatch({type: "UPDATE_USER", payload: {"id": userId, "name": name, "email": email}});
    }
}