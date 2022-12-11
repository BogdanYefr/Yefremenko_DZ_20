const hours = (state = 0 , action) => {
  switch (action.type) {
      case "HOUR++":
          return state + 1;
      case "HOUR-RESET": 
          return state = 0;
      default:
          return state
  }
}

export default hours;