import { motion } from 'framer-motion';
import React from 'react'
import "./loading.css"
export default function Brandname() {
  return (
    <>
      <motion.div class="header" initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <h3 className='cd'>
          <font color="red" >{"<"}</font><font color="cyan">S</font><font color="#3fe004">U</font><font color="#fa3a9d">B</font><font color="orange">O</font><font color="#fffff">D</font><font color="#fff646">H</font><font color="red">/></font>
        </h3>
      </motion.div>
    </>
  )
}
