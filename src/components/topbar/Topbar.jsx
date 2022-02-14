import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fa fa-facebook"></i>
        <i className="topicon fa fa-instagram"></i>
        <i className="topicon fa fa-twitter"></i>
        <i className="topicon fa fa-pinterest"></i>
      </div>

      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistitem">
            {user && <li className="topListItem"><Link className="link" to="/logout">
              LOGOUT
            </Link></li>}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link className="link" to="/setting">
            <img
              className="topimg"
              src="https://images.pexels.com/photos/9789913/pexels-photo-9789913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topsrchicon fa fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;

// import { Link } from "react-router-dom";
// import "./topbar.css";

// export default function Topbar() {
//   const user = true;
//   return (
//     <div className="top">

//       <div className="topCenter">
//         <ul className="topList">
//
//           <li className="topListItem">ABOUT</li>
//           <li className="topListItem">CONTACT</li>
//
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }
