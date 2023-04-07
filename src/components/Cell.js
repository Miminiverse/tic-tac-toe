

const Cell = ({id, cell, play, setPlay, cells, setCells}) => {

    const handleClick = (e) => {

        const checked = e.target.firstChild.classList.contains("circle")
        || e.target.firstChild.classList.contains("cross")
        
        if (!checked) {
            const newArray = cells.slice()
            if(play === "circle")
            e.target.firstChild.classList.add("circle")
            setPlay("cross")
            newArray[id] = "circle"

            if (play === "cross") {
            e.target.firstChild.classList.add("cross")
            setPlay("circle")
            newArray[id] = "cross"
        }
        setCells(newArray)
        }
    }


    return (
        <>
        <div 
        className="cell"
        onClick={handleClick}
        >
            <div className={cell}></div>
        </div>
        </>
    )
}

export default Cell