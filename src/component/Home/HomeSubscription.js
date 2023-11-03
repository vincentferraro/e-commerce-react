
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
    return(<section className="h-[378px] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-light">Subscribe</h2>
        <span className="text-xl font-light">Sign up with your email address to receive news and updates.</span>
        <form className="m-4" onSubmit={onSumbit}>
            <input className="border-2 border-solid border-[#E0E0E0] p-3 h-[72px] w-[280px]"type="text" placeholder="Email Adress" value={text}onChange={handleChange}/>
            <button className="m-4 h-16 w-28 bg-black text-white" type="submit">Sign Up</button>
        </form>
    </section>)
}

export default HomeSubscription;