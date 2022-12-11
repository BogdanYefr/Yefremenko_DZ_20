let subSeconds = (state = 0 , action) => {
  switch (action.type) {
      case "SUB-SECOND++":
          return state + 1
      case "SUB-SECOND-RESET" : 
          return state = 0
      default:
          return state

  }
}

export default subSeconds;