import React ,{useState}from 'react'
import ListItem from './ListItem'



const List = () => {
//    console.log(items)
const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3','Item 4','Item 5','Item 6','Item 7','Item 8','Item 9','Item 10']);
    const[draggredItem, setDraggredItem] = useState(null)
    const[draggedOverItem, setDraggedOverItem] = useState(null)

    const handleDragStart = (event,index) => {
        // console.log(event.currentTarget.dataset, 'start')
        // const index= event.currentTarget.dataset.index
        // setDraggredItem(index)
        // console.log(event.dataTransfer.setData,"event.dataTransfer.setData")
        console.log(index,"startindex")
        event.dataTransfer.setData('index', index);
    }
    const handleDragOver = (event) => {
        // event.preventDefault()
        // const index= event.currentTarget.dataset.index
        // setDraggedOverItem(index)
        event.preventDefault();

    }
    const handleDrop = (event,index) => {
        // event.preventDefault()
        // const fromIndex = draggredItem
        // const toIndex = draggedOverItem
        // const newItems = [...items]
        // const [removedItem] = newItems.splice(fromIndex, 1)
        // newItems.splice(toIndex, 0, removedItem)
        // console.log(newItems)
        // setDraggedOverItem(null)
        // setDraggredItem(null)
        event.preventDefault();
        const dragIndex = event.dataTransfer.getData('index');
        console.log(dragIndex,"dragIndex")
        console.log(index,"dropindex")
        const newItems = [...items];
        const dragItem = newItems[dragIndex];
        // newItems.splice(dragIndex, 1);
        // newItems.splice(index, 0, dragItem);
        // setItems(newItems);
        newItems.splice(dragIndex, 1);
        newItems.splice(index, 0, dragItem);
        setItems(newItems);


    }

  return (
    <div>

        {/* {items.map((item, index) => {
           return <ListItem key={index} item={item} index={index} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleDrop={handleDrop}/>
        })} */}
        <ul>
      {items.map((item, index) => (
        <li key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}>
          {item}
        </li>
      ))}
    </ul> 
    </div>
  )
}

export default List