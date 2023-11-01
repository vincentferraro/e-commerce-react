const Card = (props)=>{
    const stylesImg={
        width:"100px",
        heigh:"100px"
    }
    return(
        <div>
            <img style={stylesImg}src={props.src} alt={props.alt} />
            <span>{props.description}</span> 
            <span>{props.price} {props.discount}</span>
            <span>{props.status}</span>
        </div>
    )
}

export default Card;