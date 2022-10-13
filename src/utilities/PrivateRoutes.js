import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = ({ user, children }) => {
    if (!user) {
    return <Navigate to="/" replace />;
    }
    return children;
   };
   export default PrivateRoutes