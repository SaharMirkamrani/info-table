import styles from '../styles/Table.module.css';
import { useEffect, useContext } from 'react';
import data from '../api/data.json';
import { FilterContext } from '../context/filter-context';

const Table = () => {
  const { filtered_ads } = useContext(FilterContext);
  console.log(filtered_ads);

  return (
    <>
      <table className={styles.items}>
        <thead>
          <tr>
            <th>نام تغییر دهنده</th>
            <th>تاریخ</th>
            <th>نام آگهی</th>
            <th>فیلد</th>
            <th>مقدار قدیمی</th>
            <th>مقدار جدید</th>
          </tr>
        </thead>
        <tbody>
        {/* {filtered_ads.map(ad => (
      <tr key={ad.id}>
      <td>{ad.name}</td>
      <td>{ad.date}</td>
      <td>{ad.title}</td>
      <td>{ad.field}</td>
      <td>{ad.old_value}</td>
      <td>{ad.new_value}</td>
    </tr>
    ))} */}
    
        
          <tr>
            <td>{data[0].name}</td>
            <td>{data[0].date}</td>
            <td>{data[0].title}</td>
            <td>{data[0].field}</td>
            <td>{data[0].old_value}</td>
            <td>{data[0].new_value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
