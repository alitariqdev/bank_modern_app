import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-l flex flex-col justify-start mr-10'>
                    <img src={logo} alt="hoo" className='w-[266px] h-[72px] object-contain' />
                </div>
                <p className={`${styles.paragraph} mt-4  max-w-[310px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>

            </div>
            <div className='flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-10 justify-between'>
                {footerLinks.map((footerLink, index) => (

                    <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='text-white font-poppins font-medium text-[18px] leading-[27px]'>{footerLink.title}</h4>
                        <ul className='list-none mt-4'>
                            {footerLink.links.map((link, index) => (
                                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'} `}>
                                    {link.name}

                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className=' mt-7 w-full flex  justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
                <p className='text-white font-poppins font-normal text-center text-[18px] leading-[27px]'>
                    2023 HooBank. All Rights Reserved.
                </p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index) => (
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer 
                        ${index !== socialMedia.length - 1 ? 'mr-6' : ' '}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer
