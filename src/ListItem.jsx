import React from 'react'

const ListItem = ({item,index,handleDragStart,handleDragOver,handleDrop}) => {

    // console.log(item,"item",index,"index",handleDragStart,"handleDragStart",handleDragOver,"handleDragOver",handleDrop,"handleDrop")

  return (
    <div draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} data-index={index}>
{item}
    </div>
  )
}

export default ListItem