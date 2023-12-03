function Pill(props) {
    return (
        <p className={`flex-shrink-0 flex gap-1 items-center py-1 px-3 w-fit text-sm rounded-full ${props.accent} ${props.bg}`}>
            <span className="material-symbols-outlined">{props.children.icon}</span>
            {props.children.text}
        </p>)
}

export default Pill;