import Input from './Input';
import styles from '../styles/Header.module.css';

const inputProps = [
  { name: 'نام تغییر دهنده', type: 'text' },
  { name: 'تاریخ', type: 'date' },
  { name: 'نام آگهی', type: 'text' },
  { name: 'فیلد', type: 'text' },
];

const Header = () => {
  return (
    <div className={styles.main}>
      {inputProps.map((input) => (
        <Input key={input.id} title={input.name} type={input.type} />
      ))}
    </div>
  );
};

export default Header;
