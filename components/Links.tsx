"use client"

import { openMail, openPhone } from "@/utils/Helper";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { motion } from "framer-motion"

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
            <div className={`select-none fixed bottom-0 left-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-6 py-4 px-2 md:px-8 md:py-6 mb-4}`}
                style={{ zIndex: 20 }}>
                <motion.p
                    className="text-xs md:text-sm lg:text-lg text-gray-300"
                    initial={{ opacity: 0, scale: 0.8, transform: 'rotate(90deg)' }}
                    whileInView={{ opacity: 1, scale: 1, transform: 'rotate(90deg)' }}
                    transition={{ repeat: 0, duration: 0.5, delay: 1.5, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    Follow Me
                </motion.p>
                <motion.span
                    className="h-20 w-px bg-gray-300 my-8 self-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 1.8, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 2, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}>
                    <FaGithub className="icon" onClick={() => handleClickLink(LinkType.GITHUB)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 2.2, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}>
                    <FaTelegram className="icon" onClick={() => handleClickLink(LinkType.TELEGRAM)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 2.4, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}>
                    <FaWhatsapp className="icon" onClick={() => handleClickLink(LinkType.WHATSAPP)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 2.8, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}>
                    <FaLinkedin className="icon" onClick={() => handleClickLink(LinkType.LINKEDIN)} />
                </motion.div>
            </div>

            <div className={`select-none fixed bottom-0 right-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-6 py-4 px-2 md:px-8 md:py-6 mb-4}`}
                style={{ zIndex: 20 }}>
                <motion.p
                    className="text-xs md:text-sm lg:text-lg text-gray-300"
                    initial={{ opacity: 0, scale: 0.8, transform: 'rotate(90deg)' }}
                    whileInView={{ opacity: 1, scale: 1, transform: 'rotate(90deg)' }}
                    transition={{ repeat: 0, duration: 0.5, delay: 3, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    Contact Me
                </motion.p>
                <motion.span
                    className="h-20 w-px bg-gray-300 my-8 self-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 3.2, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 3.4, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}>
                    <MdEmail className="icon" onClick={() => handleClickLink(LinkType.EMAIL)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 3.6, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}>
                    <MdPhoneEnabled className="icon" onClick={() => handleClickLink(LinkType.PHONE)} />
                </motion.div>
            </div>
        </>
    )
}

export default Links