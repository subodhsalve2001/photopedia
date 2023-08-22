import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { motion } from 'framer-motion'
import Brandname from './Brandname'
export default function Navbar() {
    return (
        <>
            <motion.nav data-aos="fade-down" initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }} className="navbar navbar-expand-lg bg-transperent navbar-dark text-center ">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <Brandname />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse gap-5" id="navbarNavAltMarkup">
                        <div className="navbar-nav gap-4">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/resume">Resume </Link>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="/contact">Contact US</Link>
                        </div>
                        {/* <div className="prop">
                            <img src="https://plus.unsplash.com/premium_photo-1682002190699-225a6f9a7106?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className='img-fluid prof ' />
                        </div> */}
                    </div>
                </div>
            </motion.nav>
        </>
    )
}
