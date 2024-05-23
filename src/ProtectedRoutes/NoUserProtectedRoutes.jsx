import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const NoUserProtectedRoutes = ({children}) => {
    const {user , loading} = useAuth();

    if(loading) return <div className="min-h-screen flex justify-center items-center">
        <img src="https://i.ibb.co/xF7yDds/loading.gif" alt="" className="h-48 w-auto"/>
    </div>
    if(user){
        return <Navigate to="/"></Navigate>
    }

    return children;
};

NoUserProtectedRoutes.propTypes = {
    children : PropTypes.node,
}

export default NoUserProtectedRoutes;