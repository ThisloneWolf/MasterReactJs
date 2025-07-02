import React from "react"

const MainScrollableArea = ({position}) => {
    return (
        <div className="movable-block" style={{top: position}}>Pos : {position} Movable Block</div>
    )

}

export default MainScrollableArea