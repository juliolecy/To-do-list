import * as k from './styles'

import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'


const Footer = () => {
  return (
    <k.FooterContainer>
        <k.FooterLogo>JLINS</k.FooterLogo>

        <k.FooterSpan>JLins © 2022 All rights reserved. </k.FooterSpan>

        <k.FooterSM>
            <k.SMLink target='_blank' href='https://www.linkedin.com/in/jlins/'> <TiSocialLinkedinCircular size={50} style={{color: '#fff'}} /></k.SMLink> 
            <k.SMLink target='_blank' href='https://api.whatsapp.com/send?phone=5521986739047&text=Ol%C3%A1%2C%20me%20envie%20uma%20mensagem'><BsWhatsapp size={35} style={{color: '#fff'}} /></k.SMLink>
            <k.SMLink target='_blank' href='https://github.com/juliolecy'><AiFillGithub size={40} style={{color: '#fff'}} /></k.SMLink>
            <k.SMLink target='_blank' href='https://t.me/JLins19'><TbBrandTelegram size={40} style={{color: '#fff'}} /></k.SMLink>
        </k.FooterSM>
    </k.FooterContainer>
  )
}

export default Footer;