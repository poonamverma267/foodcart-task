import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import classes from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section></section>
      <ul className={classes.footermenu}>
        <li>
          <a href="#" className={classes.a1}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={classes.a2}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" className={classes.a3}>
            How it works?
          </a>
        </li>
        <li>
          <a href="#" className={classes.a4}>
            Menus
          </a>
        </li>
        <li>
          <a href="#" className={classes.a4}>
            Profile
          </a>
        </li>
      </ul>
      <section className={classes.row}>
        <ul className={classes.social}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </section>
      <div className={classes.lastdiv}>
        All Rights Are Reserved © 2021 Lokal Grub | Designed by Cart Geek
      </div>
    </footer>
  );
};
export default Footer;
