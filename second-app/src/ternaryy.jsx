function Ternaryy() {
    let isAdmin = true;
    let cart = ["hello", "js", false]
    let score = 80;
    let content;
    let status ='error'
    if(status=='loading')
    {
        content = <b>content is loading...</b>
    }
            
    else if(status=='error')
    {
        content = <b>error while loading content</b>
    }
    else if(status=='success')
    {
        content = <b>content loaded successfully</b>
    }
    else{
        content = <b>cError</b>
    }
    return(
        <>
        {isAdmin ? "welcome Admin":"Plase login"}
        <br />
        {cart.length > 0 ? "you have items in cart":"your cart is empty"}
        {content}   
        </>
    )

}
export default Ternaryy