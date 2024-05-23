import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const UserProtectedRoutes = ({children}) => {
    // const location = useLocation();
    const {loading , user} = useAuth();

    if(loading) return <div className="min-h-screen flex justify-center items-center">
        <img src="https://i.ibb.co/xF7yDds/loading.gif" alt="" className="h-48 w-auto"/>
    </div>

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children
};

UserProtectedRoutes.propTypes = {
    children : PropTypes.node,
}

export default UserProtectedRoutes;