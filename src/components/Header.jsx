import styles from '../styles/Header.module.css';
import { FilterContext } from '../context/filter-context';
import { useContext } from 'react';
import image from '../images/filter-icon.png';

const Header = () => {
  const { updateFilters } = useContext(FilterContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.main}>
        <div className={styles.form}>
          <label className={styles.label}>نام تغییر دهنده : </label>
          <input
            className={styles.input}
            type="text"
            name="person-name"
            onChange={updateFilters}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>تاریخ : </label>
          <input
            className={styles.input}
            type="date"
            name="date"
            onChange={updateFilters}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>نام آگهی : </label>
          <input
            className={styles.input}
            type="text"
            name="ad-name"
            onChange={updateFilters}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}> مرتب سازی بر اساس : </label>
          <select className={styles.input} name="sort">
            <option value="title">عنوان</option>
            <option value="price">قیمت</option>
          </select>
        </div>
        <br />
        
        <button
        onClick={handleSubmit}
          type="submit"
          style={{
            backgroundColor: 'white',
            border: 'none',
            cursor: "pointer"
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
