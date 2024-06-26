import { NavLink, Outlet } from "react-router-dom"


export default function Menu(){
    return (<>
    <p><NavLink to={`/`}>Home</NavLink></p>
    <p><NavLink to = {`/signup`}>Signup</NavLink></p>
    <p><NavLink to = {`/order`}>Order</NavLink></p>
    <p><NavLink to = {`/login`}>Login</NavLink></p>
    <p><NavLink to = {`/logout`}>Logout</NavLink></p>
    <div><Outlet/></div>
    </>)
}