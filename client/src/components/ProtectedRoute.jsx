import { Navigate } from "react-router-dom";

function ProtectedRoute({

children

}){

const user=
sessionStorage.getItem(
"user"
);

return user
? children
: <Navigate to="/login"/>;

}

export default ProtectedRoute;