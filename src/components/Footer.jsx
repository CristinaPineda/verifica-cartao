import React from 'react';
import { BsGithub, BsLinkedin, BsBraces, BsCheck2 } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { FooterApp } from '../styles';

export default function Footer() {
  return(
    <FooterApp >
      <div className="footer-top">
        <div>
          <h2>Cristina Pineda Developer</h2>
        </div>
        <div className="social-icons">
          <a href="https://github.com/CristinaPineda" target="blank">
            <BsGithub className="icons"/>
          </a>
          <a href="https://www.linkedin.com/in/cristina-pineda/" target="blank">
            <BsLinkedin className="icons" />
          </a>
          <a href="https://cristinapineda.github.io/#/" target="blank">
            <BsBraces className="icons"/>
          </a>
        </div>
      </div>
      <div className="footer-details">
        <div>
          <h4>Projeto Verifica cartão desenvolvido com:</h4>
        </div>
        <div className="stacks">
          <ul>
            <li><FaReact /></li>
            <li>React</li>
          </ul>
        </div>
        <div class="contact">
          <h4>Contato</h4>
          <p>(11)947201686</p>
          <p>cristinadaspineda@yahoo.com.br</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <p>Cristina Pineda &copy; 2021</p>
        </div>
          <div>
            <p>Trabalhe comigo<BsCheck2 className="icons"/></p>
          </div>
      </div>
    </FooterApp>
  )
}
