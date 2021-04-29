import styles from '../styles/Table.module.css';

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
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
        </tr>
        <tr>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
          <td>آیتم</td>
        </tr>
      </table>
    </>
  );
};

export default Table;
