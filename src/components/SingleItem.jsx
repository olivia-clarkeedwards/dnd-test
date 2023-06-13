import { useRef } from 'react'
import { useDrag } from 'react-dnd'

function SingleItem({ item, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'itemDiv',
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }))
  return (
    <div
      ref={drag}
      className="drag"
      style={{ border: isDragging ? '5px solid pink' : '0px' }}
    >
      <p>{item}</p>
    </div>
  )
}

export default SingleItem
