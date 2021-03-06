import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

const App = () => {
  const [filteredData, setFilteredData] = useState([]);

  const [formData, setFormData] = useState({
    personName: '',
    date: '',
    title: '',
    field: '',
  });

  const [error, setError] = useState('');

  return (
    <div>
      <Header
        setFilteredData={setFilteredData}
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
      />
      <Table filteredData={filteredData} />
    </div>
  );
};
export default App;
