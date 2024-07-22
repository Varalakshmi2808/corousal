import {useReducer} from 'react'
let App=()={
  let[state,dispatch]=useReducer((state,action)=>{
    switch (action.type){
      case "setName":
        return({...state,name:action.playload})
      case "setNames":
        return({names:[...state.name,state.name],name:""})
    }
  },{name:"",names:[]})
 

 return(
  
 )
}
export default App