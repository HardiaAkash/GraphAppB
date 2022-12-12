import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Graph A</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/graphB">Graph B</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/graphC">Graph C</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/graphD">Graph D</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/graphE">Graph E</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/graphF">Graph F</Link>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 3</a>
                        </li> */}
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar