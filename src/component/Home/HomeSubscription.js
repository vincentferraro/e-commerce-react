
import { useState } from "react"
const HomeSubscription = ()=>{

    const [text, setText]=useState('')

    const handleChange = (e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const onSumbit = (e)=>{
        e.preventDefault()
        setText('')
    }
    return(<section>
        <h1>Section</h1>
        <span>Sign up with your email address to receive news and updates.</span>
        <form onSubmit={onSumbit}>
            <input type="text" placeholder="Enter your email" value={text}onChange={handleChange}/>
            <button type="submit">Sign Up</button>
        </form>
    </section>)
}

export default HomeSubscription;