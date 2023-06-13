import SingleItem from './SingleItem'
import { useState } from 'react'
import { useDrop } from 'react-dnd'

const stock = [
  { id: 1, itemName: 'apples' },
  { id: 2, itemName: 'bananas' },
  { id: 3, itemName: 'mangoes' },
]

function DragDrop() {
  const [basket, setBasket] = useState([{ id: 3, itemName: 'mangoes' }])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'itemDiv',
    drop: (item) => {
      addItemToBasket(item.id)
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }))

  const addItemToBasket = (id) => {
    console.log(id)
    const itemList = stock.filter((item) => id === item.id)
    setBasket((basket) => [...basket, itemList[0]])
  }

  return (
    <>
      <div className="groceries">
        {stock.map((item) => (
          <SingleItem item={item.itemName} id={item.id} />
        ))}
      </div>
      <div className="shopping-list" ref={drop}>
        {basket.map((item) => (
          <SingleItem item={item.itemName} id={item.id} />
        ))}
      </div>
    </>
  )
}

export default DragDrop
