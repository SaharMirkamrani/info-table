import {
  UPDATE_FILTERS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }
    // case SORT_PRODUCTS: {
    //   const { sort, filtered_products } = state;
    //   let tempProducts = [...filtered_products];
    //   if (sort === 'price-lowest') {
    //     tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    //   }
    //   if (sort === 'price-highest') {
    //     tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    //   }
    //   if (sort === 'name-a') {
    //     tempProducts = tempProducts.sort((a, b) =>
    //       a.name.localeCompare(b.name)
    //     );
    //   }
    //   if (sort === 'name-z') {
    //     tempProducts = tempProducts.sort((a, b) =>
    //       b.name.localeCompare(a.name)
    //     );
    //   }
    //   return { ...state, filtered_products: tempProducts };
    // }

    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      console.log(name, value);
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    case FILTER_PRODUCTS: {
      const { all_ads } = state;
      const { person_name, date, ad_name } = state.filters;
      let tempAds = [...all_ads];
			//person name
      if (person_name) {
        tempAds = tempAds.filter((ad) => {
          return ad.name.toLowerCase().includes(person_name);
        });
      }
      // //category
      // if (category !== 'all') {
      //   tempProducts = tempProducts.filter((product) => {
      //     return product.category === category;
      //   });
      // }
      // //company
      // if (company) {
      //   tempProducts = tempProducts.filter((product) => {
      //     return product.company === company;
      //   });
      // }

      return { ...state, filtered_ads: tempAds };
    }

    default: {
      return state;
    }
  }
};

export default filter_reducer;
