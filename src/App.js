import './app.css'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from './components/DragDrop'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDrop />
    </DndProvider>
  )
}

export default App
