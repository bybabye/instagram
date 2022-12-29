import { Navigate } from "react-router-dom";


export const Private = ({Component}:{Component: any}) => {
    const auth = true;

    return auth ? Component : <Navigate to='/login'/>
}