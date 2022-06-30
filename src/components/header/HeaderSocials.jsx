import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { GoMarkGithub } from "react-icons/go"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/cosmin-alexandru-rusu-226004214" target="_blank"> <BsLinkedin />
            </a>
            <a href="https://github.com/aleexxz?tab=repositories" target="_blank"> <GoMarkGithub />
            </a>
        </div>
    )
}

export default HeaderSocials