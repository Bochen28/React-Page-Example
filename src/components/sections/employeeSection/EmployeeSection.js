import Employee from "../../employee/Employee";
import employees from "../../../data/employees"
import styles from "./EmployeeSection.module.css";

function EmployeeSection() {
  return (
    <section id="about" className={styles.container}>
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
    </section>
  );
}

export default EmployeeSection;
