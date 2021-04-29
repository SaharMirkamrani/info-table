import { createContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/filter-reducer';
import {
  UPDATE_FILTERS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from '../actions';
import data from '../api/data.json';

const initialState = {
  filtered_ads: [],
  all_ads: data,
  sort: 'عنوان',
  filters: {
    person_name: '',
    date: '',
    ad_name: '',
  },
};

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'person-name') {
      value = e.target.value;
    }
    if (name === 'ad-name') {
      value = e.target.value;
    }
    if (name === 'date') {
      // value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  return (
    <>
      <FilterContext.Provider
        value={{
          ...state,
          updateSort,
          updateFilters,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

export default FilterProvider;
