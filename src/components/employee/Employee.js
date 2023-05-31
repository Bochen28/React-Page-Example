import styles from "./Employee.module.css";

function Employee({ firstName, lastName, position, description, photoUrl }) {
  return (
    <li className={styles.employee}>
      <div
        className={styles.employeeImage}
        style={{ backgroundImage: `url(${photoUrl})` }}
      ></div>
      <div className={styles.description}>
        <h3>{`${firstName} ${lastName} [${position}]`}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default Employee;
