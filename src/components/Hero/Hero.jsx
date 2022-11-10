import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>Crème de protection</span>

        <div className={css.text2}>
          <span>Collection Tendance</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, inventore.
          </span>
        </div>
      </div>

      <div className={css.wrapper}>
        <motion.div
          className={css.blueCircle}
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
        ></motion.div>

        <motion.img 
        initial={{ bottom: "-2rem" }}
        whileInView={{ bottom: "0rem" }}
        transition={transition}
        src={HeroImg} alt="" width={600} />

        
        <motion.div 
        initial={{ right: "4%" }}
        whileInView={{ right: "2%" }}
        transition={transition}
        className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Offres d'inscription</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      <div className={css.h_sides}>
        <div className={css.trafic}>
          <span>1.5m</span>
          <span>Trafic mensuel</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Client(e)s satisfait</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
