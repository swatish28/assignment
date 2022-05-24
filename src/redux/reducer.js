const initialState = {
  selectedData: [],
};

export default function reducer(currentState = initialState, action) {
  switch (action.type) {
    case "ADD_TO_REDUX": {
        let data = {...action.payload}
        let arr = []
      Object.entries(data).forEach(([key, val]) => {
        if (val.checked === true) {
          let obj = {};   
          obj = { ...val, satellite: key };
          arr.push(obj);
        }
      });
      console.log('Added selected table data to redux store', arr)
      return {selectedData : [ ...arr]}
    }
    default:
      return currentState;
  }
}
