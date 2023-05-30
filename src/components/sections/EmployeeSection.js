import Employee from "../Employee";
import styles from "./EmployeeSection.module.css";

function EmployeeSection() {
  const employees = [
    {
      firstName: "Jan",
      lastName: "Kowalski",
      position: "Programista",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoUrl: "https://picsum.photos/300/300",
    },
    {
      firstName: "Anna",
      lastName: "Nowak",
      position: "Grafik",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoUrl: "https://picsum.photos/500/500",
    },
  ];

  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1>Nasi specjaliści</h1>
          <ul className={styles.employeeList}>
            {employees.map((employee, index) => (
              <Employee key={index} {...employee} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSection;
