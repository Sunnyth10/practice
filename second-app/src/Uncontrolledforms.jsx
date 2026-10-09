import { useRef } from "react";

function Uncontrolledforms(){
    let usernameref = useRef(null)
    let passwordref = useRef(null)

    let submit = (e)=>{
        e.preventDefault();
        let username = usernameref.current.value;
        let password = passwordref.current.value;
        console.log(username,password)


    }
    return (
        <>
        <h1>Uncoltroled forms</h1>
        <form onSubmit={submit}>
            <input type="text"
            name='username'
            ref={usernameref}
            placeholder="enter your name"/>
            <br /> <br />
            <input type="text"
            name="password"
            ref={passwordref}/>
            <br /><br />
            <button type="submit"
            >Submit</button>
        </form>
        </>
    )
}
export default Uncontrolledforms