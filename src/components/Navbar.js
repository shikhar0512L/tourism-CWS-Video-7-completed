import * as React from 'react';
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Tourism</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/india">India</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/france">France</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Dubai">Dubai</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}