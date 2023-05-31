import Header from "../../header/Header";
import styles from "./MainSection.module.css";

function MainSection() {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.content}>
            <h1>
              Nasza firma oferuje najwyższej
              <br />
              jakości produkty
            </h1>
            <p>Nie wierz nam na słowo - sprawdź</p>
            <a href="#offerSection">oferta</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainSection;
