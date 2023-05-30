import styles from "./Offer.module.css";

function Offer({ isNew }) {
  return (
    <li className={styles.offer}>
      {isNew && <div className={styles.dot}></div>}
      <h3>Oferta</h3>
      {isNew && <p>(Nowość)</p>}
    </li>
  );
}

export default Offer;
