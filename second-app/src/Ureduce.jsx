import { useReducer} from "react";
let initialState = {
    balance:0
}
function reducer(state,action){
    switch(action.type){
        case "deposit":
            return {...state,balance:state.balance+action.amount}
        case "withdraw":
            return {...state,balance:state.balance-action.amount}
        case "reset":
            return initialState
    }
}
function Ureduce() {
    let[state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
        <h1>Balance:{state.balance}</h1>
        <button onClick={()=>{dispatch({type:"deposit",amount:100})}}>Deposit</button>
        <button onClick={()=>{dispatch({type:"withdraw",amount:50})}}>Withdraw</button>
        <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>

        </>
    )
}

export default Ureduce