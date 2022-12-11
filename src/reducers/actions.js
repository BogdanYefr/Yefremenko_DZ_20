export const addSecond =()=>{
  return {
      type : "SECOND++"
  }
}

export const resetSecond = () => {
  return {
      type : "SECOND-RESET"
  }
}

export const addMinute =()=>{
  return {
      type : "MINUTE++"
  }
}

export const resetMinute = () => {
  return {
      type : "MINUTE-RESET"
  }
}

export const addSubSecond =()=>{
  return {
      type : "SUB-SECOND++"
  }
}

export const resetSubSecond = () => {
  return {
      type : "SUB-SECOND-RESET"
  }
}

export const addHour =()=>{
  return {
      type : "HOUR++"
  }
}

export const resetHour = () => {
  return {
      type : "HOUR-RESET"
  }
}

export const start = () => {
  return {
      type: "START"
  }
}

export const stop = () => {
  return {
      type : "STOP"
  }
}

export const updateLap = (n) => {
  return {
      type : "UPDATE",
      payload : n
  }
}

export const resetLaps=()=> {
  return {
      type : "RESET-LAPS"
  }
}