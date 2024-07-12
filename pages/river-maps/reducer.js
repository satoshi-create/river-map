const reducer = (state, action) => {
  if (action.type === "TOGGLE") {
    let tempItems = state.rivermapImages.map((item) => {
      if (item.name == action.payload.name) {
        return { ...item, bln: !item.bln };
      }
      return item;
    });
    return { ...state, rivermapImages: tempItems };
  }
  if (action.type === "TOGGLE-GOVERMENT-PART") {
    let tempItems = state.govermentImages.map((item) => {
      if (item.name == action.payload.name) {
        return { ...item, bln: !item.bln };
      }
      return item;
    });
    return { ...state, govermentImages: tempItems };
  }
  if (action.type === "TOGGLE-GOVERMENT-IMAGE") {
    return { ...state, toggleGov: !state.toggleGov };
  }

  if (action.type === "TOGGLE-HAZARD-IMAGE") {
    let tempItems = state.hazardImages.map((item) => {
      if (item.name == action.payload.name) {
        return { ...item, bln: !item.bln };
      }
      return item;
    });
    return { ...state, hazardImages: tempItems };
  }

  if (action.type === "OPACITY") {
    let tempItems = state.rivermapImages.map((item) => {
      if (item.name == action.payload.name) {
        return { ...item, opc: action.payload.e.target.value };
      }
      return item;
    });
    return { ...state, rivermapImages: tempItems };
  }
  if (action.type === "OPACITY-GOVERMENT-PART") {
    let tempItems = state.govermentImages.map((item) => {
      if (item.name == action.payload.name) {
        return { ...item, opc: action.payload.e.target.value };
      }
      return item;
    });
    return { ...state, govermentImages: tempItems };
  }
  if (action.type === "OPACITY-GOVERMENT-IMAGE") {
    return { ...state, opcGov: action.payload.e.target.value };
  }
  if (action.type === "OPACITY-HAZARD-IMAGE") {
    let tempItems = state.hazardImages.map((item) => {
      if (item.name == action.payload.name) {
        return { ...item, opc: action.payload.e.target.value };
      }
      return item;
    });
    return { ...state, hazardImages: tempItems };
  }
};

export default reducer;
