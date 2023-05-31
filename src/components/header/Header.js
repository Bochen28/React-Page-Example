import styles from "./Header.module.css";

function Header() {
  return (
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
              <a href="#" className={styles.disabledLink}>
                kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
