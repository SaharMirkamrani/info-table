import styles from '../styles/Table.module.css';
import TableRow from './TableRow';

const Table = ({ filteredData }) => {
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
          {filteredData.map((data) => (
            <TableRow key={data.id} {...data} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
