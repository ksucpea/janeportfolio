const Page = ({ id, children }) => {

    return (
        <div id={id} className="page">
            {children}
        </div>
    )
}

export default Page;