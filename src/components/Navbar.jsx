import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EmailContext } from "../context/UserContext";

const Navbar = () => {


  const {user, logOut} = useContext(EmailContext);


    const nav = <>
    
    <li> <NavLink  to='/' > Home </NavLink> </li> 
    <li> <NavLink  to='/login' > Log In</NavLink> </li> 
    <li> <NavLink  to='/signup' > Sign Up</NavLink> </li> 
    <li> <NavLink  to='/list' > List item</NavLink> </li> 

{

  user && <> 
      <li> <NavLink  to='/profile' > Profile Update</NavLink> </li> 
    <li> <NavLink  to='/about' > About</NavLink> </li> 
  
  </>
}
    </>

    const logOutHandle = ()=> {


      logOut()
      .then((result)=> {

        console.log(result.user);
      })
      .catch(error=> {
        console.log(error.message);
      })
    }
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">

    {



user && <p> {user.email} </p>
    }
   {

    user ?  <a   onClick={logOutHandle} className="btn btn-sm">Log Out</a> : <NavLink  to='/login'   className='btn btn-sm'>  Log In </NavLink>
   }
  </div>
</div>



        </div>
    );
};

export default Navbar;