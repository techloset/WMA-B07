import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PublicRoute({children}) {
    const user = useSelector((store)=>store.authSlice.user)

    return user ? <Navigate to="/" /> : children;
}
