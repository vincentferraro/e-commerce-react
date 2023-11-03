
import { useState } from "react"
import { Formik } from 'formik';
const HomeSubscription = ()=>{

    const [text, setText]=useState('')

    const handleChange = (e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const onSumbit = (e)=>{
        if(text === ''){ 
            e.preventDefault()
            console.log('No mail informed')}
        else{
            e.preventDefault()
        setText('')
        }
        
    }
    return(<section className="h-[378px] flex flex-col justify-center items-center">
         <h2 className="text-4xl font-light">Subscribe</h2>
        <span className="text-xl font-light">Sign up with your email address to receive news and updates.</span>
        <Formik
       initialValues={{ mail: '' }}
       onSubmit={(values, actions) => {
        if(values.mail !==''){
            setTimeout(() => {
                alert(JSON.stringify(values.mail, null, 2));
                actions.setSubmitting(false);
                actions.resetForm('')
              }, 500);
              
        }else{
            actions.setErrors("Email missing")
        }
            
       }}
       handleChange={(e)=>{ console.log(e.target)}}
     >
        {props => (
         <form onSubmit={props.handleSubmit}>
           <input
             className="border-2 border-solid border-[#E0E0E0] p-3 h-[72px] w-[280px]"
             placeholder="Email Adress"
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="mail"
           />
           {props.errors.name && <div id="feedback">{props.errors.name}</div>}
           <button className="m-4 h-16 w-28 bg-black text-white"  type="submit">Sign Up</button>
         </form>
       )}
     </Formik>
    </section>)
}

export default HomeSubscription;