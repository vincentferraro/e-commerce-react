const SectionHeader = (props)=>{

    return (
        <section className={props.className}>
            <p>
            {props.message}
            </p>
        </section>
    )
}
export default SectionHeader;