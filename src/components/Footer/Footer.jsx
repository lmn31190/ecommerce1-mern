import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contactez nous</span>
            <span className={css.PngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>203 route de toulouse, 31000 Toulouse</span>
            </span>

            <span className={css.PngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel: 06-14-72-21-55">06 14 72 21 55</a>
            </span>

            <span className={css.PngLine}>
              <PhoneIcon className={css.icon} />
              <a href="mailto:louismn31190@gmail.com">louismn31190@gmail.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Compte</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Se connecter
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Entreprise</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>À propos</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <p>Sécurité et confidentialité</p>
            </span>
          </div>
        </div>
      </div>

        <div className={css.copyRight}>
          <span>Copyright ©2022 by Louis, Inc.</span>
          <span>Tout droits réservés</span>
        </div>
    </div>
  );
};

export default Footer;
