import { createContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/filter-reducer';
import {
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from '../actions';
import data from '../api/data.json';

const initialState = {
  filtered_ads: [],
  all_ads: data,
  filters: {
    person_name: '',
    date: '',
    ad_name: '',
		field: 'عنوان',
  },
};

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  // useEffect(() => {
  //   dispatch({ type: FILTER_PRODUCTS });
  // }, [state.filters]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
		console.log(value)

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const filterAds = (e) => {
    e.preventDefault();
    dispatch({ type: FILTER_PRODUCTS });
  };

  return (
    <>
      <FilterContext.Provider
        value={{
          ...state,
          updateFilters,
          filterAds,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

export default FilterProvider;
