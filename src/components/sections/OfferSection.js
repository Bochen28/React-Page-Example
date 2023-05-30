import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Offer from "../Offer";
import styles from "./OfferSection.module.css";

function OfferSection() {
  const offers = [
    { isNew: true },
    { isNew: true },
    { isNew: false },
    { isNew: false },
    { isNew: false },
    { isNew: false },
  ];

  return (
    <>
      <div id="offerSection" className={styles.container}>
        <div className={styles.content}>
          <h1>Czym zajmuje się nasza firma?</h1>
          <ul className={styles.offerList}>
            {offers.map((offer, index) => (
              <Offer key={index} isNew={offer.isNew} />
            ))}
          </ul>
        </div>
      </div>
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
    </>
  );
}

export default OfferSection;
