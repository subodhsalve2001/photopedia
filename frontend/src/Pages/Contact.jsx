import React from 'react'
import '../css/contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { FcPhone } from 'react-icons/fc'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { GrSend } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
export default function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container my-4">
                    <div className="section-title text-secondary text-center">
                        <h1>Contact Me</h1>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-12">
                            <div className="info-box text-danger">
                                <h1>Get In Touch <CgProfile /></h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4 text-light">
                                <h1> <MdOutlineMail /></h1>
                                <h3>Email Me</h3>
                                <p>subodhsalve2001@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4 text-light">
                                <h1><FiPhoneCall /></h1>
                                <h3>Call Me</h3>
                                <p>+91 9763265521</p>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-item-center">
                            <div className="info-box mt-4 text-light">
                                <h1><AiOutlineGlobal /></h1>
                                <h3>Website</h3>
                                <p>www.example.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-item-center">
                            <div className="info-box mt-4 text-light">
                                <h1><BiMap /></h1>
                                <h3>Address</h3>
                                <p>1, Samarth Nagar , Aurangabad. 431001</p>

                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="col-lg-6">
                            <form className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="" className='text-info'> <strong>Full Name</strong></label>
                                        <input type="text" name="name" className="form-control bg-dark text-info" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <label htmlFor="" className='text-info '><strong>Email</strong></label>
                                        <input type="email" className="form-control bg-dark text-info" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className='text-info '><strong>Subject</strong></label>
                                        <input type="text" className="form-control bg-dark text-info" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className='text-info '><strong>Description</strong></label>
                                        <textarea type="text" className="form-control bg-dark text-info" rows={6} name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="text-center my-4"><button type="submit" className='text-light' ><strong>Send Message</strong> <GrSend /></button></div>
                                </div>
                            </form>
                        </div> */}


            </section>
            <Footer />
        </>
    )
}
