const clothesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CLOTHES":
      if (action.item.itemType === "top") {
        return { ...state, tops: [...state.tops, action.item] };
      }
      if (action.item.itemType === "pants") {
        return { ...state, pants: [...state.pants, action.item] };
      }
      if (action.item.itemType === "shoes") {
        return { ...state, shoes: [...state.shoes, action.item] };
      }
    default:
      break;
  }
};

export default clothesReducer;
