import React from 'react'
import '../css/home.css'
import Typewriter from 'typewriter-effect';
import Resume from './Resume';
import { Player } from '@lottiefiles/react-lottie-player';
import Portfolio from './Portfolio';
import Contact from './Contact'
import { motion } from 'framer-motion'
export default function Home() {
    return (
        <>

            <motion.section initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }} className='homesection' >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="hero text-center">
                                <h1 className="hero-title text-warning">Hi , I Am <span className='text-info' > SUBODH SALVE</span></h1>
                                <div className="hero-options"><span className='d-flex gap-2 options text-center' ><Typewriter
                                    options={{
                                        strings: ['MERN Stack Developer', 'Web Developer', 'UI/UX Designer', 'Freelancer'],
                                        autoStart: true,
                                        loop: true,
                                    }} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <Player
                                src='https://assets9.lottiefiles.com/packages/lf20_jtbfg2nb.json'
                                className="player"
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
            <Resume />
            <Portfolio />
            <Contact />
        </>
    )
}
