import React from 'react'
import './footer.scss'
import { FaCodepen, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
export default function Footer() {
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <div class="social-buttons text-center">
              <a href="https://www.linkedin.com/in/subodh-salve-9a5033194/" class="social-button social-button--linkedin" aria-label="Snapchat">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/subodhsalve2001" class="social-button social-button--github" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/its_subodhsalve/" class="social-button social-button--instagram" aria-label="LinkedIn">
                <FaInstagram />
              </a>
              <a href="https://codepen.io/subodhsalve2001" class="social-button social-button--codepen" aria-label="CodePen">
                <FaCodepen />
              </a>
              <a href="https://twitter.com/Subodhsalve2001" class="social-button social-button--twitter" aria-label="CodePen">
                <FaTwitter />
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
