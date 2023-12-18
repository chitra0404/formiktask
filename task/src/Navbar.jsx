import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid bg-warning p-2 text-dark ">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-item nav-link active" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-item nav-link active" to="/book">Book Details</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-item nav-link active" to="/Author">Author Details</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar