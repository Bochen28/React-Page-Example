import Footer from "../../footer/Footer";
import Offer from "../../offer/Offer";
import offers from "../../../data/offers";
import styles from "./OfferSection.module.css";

function OfferSection() {
  return (
    <>
      <section id="offerSection" className={styles.container}>
        <div className={styles.content}>
          <h1>Czym zajmuje się nasza firma?</h1>
          <ul className={styles.offerList}>
            {offers.map((offer, index) => (
              <Offer key={index} isNew={offer.isNew} offerName={offer.name}/>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OfferSection;
