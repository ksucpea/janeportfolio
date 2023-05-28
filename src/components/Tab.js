const Tab = ({title, active, onClick}) => {

    return (
        <div onClick={onClick} className={`tab ${active ? "active" : ""}`}>
            <p>{title}</p>
        </div>
        
    )
}

export default Tab;