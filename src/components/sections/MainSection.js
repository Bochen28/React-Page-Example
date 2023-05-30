import styles from "./MainSection.module.css";

function MainSection() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.content}>
          <nav>
            <ul>
              <h3>moja firma</h3>
              <li>
                <a href="#about">o nas</a>
              </li>
              <li>
                <a href="#offerSection">oferta</a>
              </li>
              <li>
                <a className={styles.disabledLink}>kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles.container}>
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
      </div>
    </main>
  );
}

export default MainSection;
