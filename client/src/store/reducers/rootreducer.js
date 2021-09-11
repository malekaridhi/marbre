import { combineReducers } from 'redux'
import clientreducer from './clientreducer'
import productReducer from './productReducer'
import chargeReducer from './chargeReducer'
import chaeEmpReducer from './charEmpReducer'
import factureReducer from './factureReducer'
import signinreducer from './signinReducer'
import loginReduicer from './loginReducer'
const rootReducer = combineReducers({
   clients:clientreducer,
   products:productReducer,
   charge:chargeReducer,
   chargeEmp:chaeEmpReducer,
   facture:factureReducer,
   user:loginReduicer

  });
  
  export default rootReducer
  