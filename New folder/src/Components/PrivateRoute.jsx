import { useContext } from "react";
import Login from "../Routes/Login";
import {authContext} from "../Context/AuthContext";

function PrivateRoute({children}) {
    let {authState} = useContext(authContext)
    return authState.isAuth ? children : <Login/>;
}

export default PrivateRoute;
