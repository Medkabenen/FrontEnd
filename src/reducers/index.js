import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({
  counter,
})

export default rootReducer

//useEffect(() => {
  //   axios.get(strainEndpoint)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("Failed to retrieve data.")
  //     })
  // }, [strainEndpoint]