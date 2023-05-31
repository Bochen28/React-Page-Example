import styles from "./Offer.module.css";

function Offer({ isNew, offerName }) {
  return (
    <li className={styles.offer}>
      {isNew && <div className={styles.dot}></div>}
      <h3>{offerName}</h3>
      {isNew && <p>(Nowość)</p>}
    </li>
  );
}

export default Offer;
