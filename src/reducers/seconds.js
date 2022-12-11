let seconds = (state = 0 , action) => {
  switch (action.type) {
      case "SECOND++":
          state++
          return state
      case "SECOND-RESET" : 
          return state = 0
      default:
          return state

  }
}

export default seconds;