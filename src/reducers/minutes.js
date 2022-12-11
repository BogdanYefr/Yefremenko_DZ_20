const minutes = (state = 0 , action) => {
  switch (action.type) {
      case "MINUTE++":
          return state + 1;
      case "MINUTE-RESET":
          return state = 0;
      default:
          return state;
  }
}

export default minutes;