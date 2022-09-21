function Pill(props) {
    return (
        <p className={`inline-block mr-2 mb-2 py-1 px-3 w-fit text-sm rounded-full ${props.accent} ${props.bg}`}>
            {props.children}
        </p>)
}

export default Pill;