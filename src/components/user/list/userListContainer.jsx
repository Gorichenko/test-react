import {connect} from "react-redux";
import UserList from "./userList";

export default connect(
    (state) => ({ userState: state.userRd }),
    () => ({type: 'GET_USER_LIST'})
)(UserList);