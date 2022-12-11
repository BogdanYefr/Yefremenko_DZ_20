import {combineReducers} from "redux"
import minutes from "./minutes"
import seconds from "./seconds"
import hours from "./hours"
import subSeconds from "./subseconds"
import timer from "./timer"
import laps from "./laps"


const allReducers  = combineReducers({hours , minutes , seconds , subSeconds ,timer , laps})

export default allReducers;