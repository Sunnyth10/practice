import useGreeting from "./useGreeting";

function Chook(){
    let message = useGreeting();
    return <h1>{message}</h1>
}   
export default Chook;