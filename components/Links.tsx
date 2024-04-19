"use client"

import { openMail, openPhone } from "@/utils/Helper";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";

enum LinkType {
    GITHUB = 'github',
    GITLAB = 'gitlab',
    TELEGRAM = 'telegram',
    WHATSAPP = 'whatsapp',
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
    EMAIL = 'email',
    PHONE = 'phone',
}


const Links = () => {

    const handleClickLink = (linkType: LinkType) => {
        switch (linkType) {
            case LinkType.GITHUB:
                window.open('https://github.com/arashaltafi', '_blank')
                break;
            case LinkType.GITLAB:
                window.open('https://gitlab.com/arashaltafi', '_blank')
                break;
            case LinkType.TELEGRAM:
                window.open('https://t.me/arashaltafi1377', '_blank')
                break;
            case LinkType.WHATSAPP:
                window.open('https://api.whatsapp.com/send/?phone=989187677641', '_blank')
                break;
            case LinkType.INSTAGRAM:
                window.open('https://instagram.com/arashaltafi', '_blank')
                break;
            case LinkType.LINKEDIN:
                window.open('https://linkedin.com/in/arashaltafi', '_blank')
                break;
            case LinkType.EMAIL:
                openMail("arashaltafi1377@gmail.com")
                break;
            case LinkType.PHONE:
                openPhone("+989187677641")
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className={`select-none absolute bottom-0 left-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-5 py-6 px-0 md:px-8 lg:py-8 lg:pr-12 mb-4 z-20'}`}>
                <p className="rotate-90 text-xs md:text-sm lg:text-lg text-gray-300">Follow Me</p>
                <span className="h-20 w-px bg-gray-300 my-8 self-center" />
                <FaGithub className="icon" onClick={() => handleClickLink(LinkType.GITHUB)} />
                <FaTelegram className="icon" onClick={() => handleClickLink(LinkType.TELEGRAM)} />
                <FaWhatsapp className="icon" onClick={() => handleClickLink(LinkType.WHATSAPP)} />
                <FaInstagram className="icon" onClick={() => handleClickLink(LinkType.INSTAGRAM)} />
                <FaLinkedin className="icon" onClick={() => handleClickLink(LinkType.LINKEDIN)} />
            </div>

            <div className={`select-none absolute bottom-0 right-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-5 py-6 px-0 md:px-8 lg:py-8 lg:pr-12 mb-4 z-20'}`}>
                <p className="rotate-90 text-xs md:text-sm lg:text-lg text-gray-300">Contact Me</p>
                <span className="h-20 w-px bg-gray-300 my-8 self-center" />
                <MdEmail className="icon" onClick={() => handleClickLink(LinkType.EMAIL)} />
                <MdPhoneEnabled className="icon" onClick={() => handleClickLink(LinkType.PHONE)} />
            </div>
        </>
    )
}

export default Links