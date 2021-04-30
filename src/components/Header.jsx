import { useState } from 'react';
import image from '../images/filter-icon.png';
import styles from '../styles/Header.module.css';
import data from '../api/data.json';

const Header = ({ setFilteredData }) => {
  const [formData, setFormData] = useState({
    personName: '',
    date: '',
    title: '',
    field: '',
  });

  const changeHandler = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    console.log('date', formData.date);
    e.preventDefault();
    const { personName, title } = formData;
    const filteredData = data.filter(
      (d) =>
        d.name.toLowerCase().includes(personName.toLowerCase()) &&
        d.title.includes(title)
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <form className={styles.main}>
        <div className={styles.form}>
          <label className={styles.label}>نام تغییر دهنده : </label>
          <input
            className={styles.input}
            type='text'
            name='personName'
            onChange={changeHandler}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>تاریخ : </label>
          <input
            className={styles.input}
            type='date'
            name='date'
            onChange={changeHandler}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>نام آگهی : </label>
          <input
            className={styles.input}
            type='text'
            name='title'
            onChange={changeHandler}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}> مرتب سازی بر اساس : </label>
          <select
            className={styles.input}
            name='field'
            onChange={changeHandler}
          >
            <option value='عنوان'>عنوان</option>
            <option value='قیمت'>قیمت</option>
          </select>
        </div>
        <br />

        <button
          onClick={submitHandler}
          type='submit'
          style={{
            backgroundColor: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={image}
            style={{ height: '50px', width: '50px' }}
            alt='filter-icon'
          />
        </button>
      </form>
    </>
  );
};

export default Header;
