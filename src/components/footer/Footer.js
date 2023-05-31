import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <ul>
          <li>
            <h4>Nazwa Firmy - wszelkie prawa zastrzeżone, 2019</h4>
          </li>
          <li className={styles.icon}>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#ffffff" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff", marginLeft: "1rem" }}
              size="2x"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
