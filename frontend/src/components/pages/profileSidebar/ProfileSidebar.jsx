// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import { useUserContext } from "../../contexts/UserContext";

// const ProfileSidebar = ({ toggle, setToggle }) => {
//   const { state } = useUserContext();

//   return (
//     <nav style={{ left: toggle && "0" }} className="navbar">
//       <ul className="navbar-links">
//         {state.user ? (
//           <>
//             <li onClick={() => setToggle(false)} className="li navbar-link">
//               <Link to="/profile">{state.user.firstName}</Link>
//             </li>
//             {/* <li onClick={() => setToggle(false)} className="li navbar-link">
//               <Link to="/orders">Orders</Link>
//             </li> */}
//             <li onClick={() => setToggle(false)} className="li navbar-link">
//               <Link to="/settings">Settings</Link>
//             </li>
//           </>
//         ) : (
//           <li onClick={() => setToggle(false)} className="li navbar-link">
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default ProfileSidebar;
