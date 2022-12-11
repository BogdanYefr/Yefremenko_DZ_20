const laps =(state = [] , action)=>{
  switch (action.type) {
      case "UPDATE":
          return state = [...state , action.payload]
      case "RESET-LAPS" :
          return state = []
  
      default:
          return state
  }
}

export default laps;