import image from '../images/filter-icon.png';
import styles from '../styles/Header.module.css';

const Header = () => {

  return (
    <>
      <form className={styles.main}>
        <div className={styles.form}>
          <label className={styles.label}>نام تغییر دهنده : </label>
          <input
            className={styles.input}
            type="text"
            name="person-name"
            onChange={}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>تاریخ : </label>
          <input
            className={styles.input}
            type="date"
            name="date"
            onChange={}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>نام آگهی : </label>
          <input
            className={styles.input}
            type="text"
            name="ad-name"
            onChange={}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}> مرتب سازی بر اساس : </label>
          <select
            className={styles.input}
            name="field"
            onChange={}
          >
            <option value="عنوان">عنوان</option>
            <option value="قیمت">قیمت</option>
          </select>
        </div>
        <br />

        <button
          onClick={}
          type="submit"
          style={{
            backgroundColor: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={image}
            style={{ height: '50px', width: '50px' }}
            alt="filter-icon"
          />
        </button>
      </form>
    </>
  );
};

export default Header;
