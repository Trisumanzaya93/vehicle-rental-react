import {Navigate} from "react-router-dom"

const ProtectRoute = (props)=>{
    const getToken = localStorage.getItem("token");
    if (!getToken) return <Navigate to="/login"/>
    return props.children
}
export default ProtectRoute