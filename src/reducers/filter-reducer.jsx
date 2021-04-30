import { UPDATE_FILTERS, FILTER_PRODUCTS } from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      console.log(name, value);
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    case FILTER_PRODUCTS: {
      const { all_ads } = state;
      const { person_name, date, ad_name, field } = state.filters;
      let tempAds = [...all_ads];
      //person name
      if (person_name) {
        tempAds = tempAds.filter((ad) => {
          return ad.name.toLowerCase().includes(person_name);
        });
      }
      //ad name
      if (ad_name) {
        tempAds = tempAds.filter((ad) => {
          return ad.title.toLowerCase().includes(ad_name);
        });
      }

      //sort
      if (field) {
        tempAds = tempAds.filter((ad) => {
          return ad.field === field;
        });
      }

      //date name
      if (date) {
        tempAds = tempAds.filter((ad) => {
          return ad.date === date;
        });
      }

      return { ...state, filtered_ads: tempAds };
    }

    default: {
      return state;
    }
  }
};

export default filter_reducer;
