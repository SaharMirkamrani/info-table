import styles from '../styles/Header.module.css';

const Input = ({ title, type }) => {
  return (
    <>
      <form className={styles.form}>
        <label className={styles.label}>{title} : </label>
        <input className={styles.input} type={type} name={title} />
      </form>
    </>
  );
};

export default Input;
