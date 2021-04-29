import styles from '../styles/Table.module.css';
import { useEffect, useContext } from 'react';
import data from '../api/data.json';
import {FilterContext} from '../context/filter-context'

const Table = () => {


  return (
    <>
      <table className={styles.items}>
        <tr>
          <th>نام تغییر دهنده</th>
          <th>تاریخ</th>
          <th>نام آگهی</th>
          <th>فیلد</th>
          <th>مقدار قدیمی</th>
          <th>مقدار جدید</th>
        </tr>

        <tr>
          <td>{data[0].name}</td>
          <td>{data[0].date}</td>
          <td>{data[0].title}</td>
          <td>{data[0].field}</td>
          <td>{data[0].old_value}</td>
          <td>{data[0].new_value}</td>
        </tr>
      </table>
    </>
  );
};

export default Table;
