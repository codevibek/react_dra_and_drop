import './App.css';
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
const list = [
  {
    id:"0",
    name:"Bibek",
    age:"20"
  },
  {
    id:"1",
    name:"Vibek",
    age:"21"
  },
  {
    id:"2",
    name:"Bidhya",
    age:"23"
  },
  {
    id:"3",
    name:"Bijaya",
    age:"18"
  },
  {
    id:"4",
    name:"Radhika",
    age:"49"
  },
  {
    id:"5",
    name:"Mani ram",
    age:"54"
  },
  {
    id:"6",
    name:"vibs",
    age:"21"
  },
  {
    id:"7",
    name:"Bimal",
    age:"24"
  },
  {
    id:"8",
    name:"Sanjeev",
    age:"24"
  },
  {
    id:"9",
    name:"G",
    age:"21"
  },
]
function App() {
const [items, setItems] = useState(list)



const handleOnDragEnd = (result)=>{
  if(!result.destination)return
  const newItems = Array.from(items)
  const [recordedItem] = newItems.splice(result.source.index,1) 
  newItems.splice(result.destination.index,0,recordedItem)
setItems(newItems)
}
// console.log(items)
  
  return (
    <div className="App">
      <h1>Just a List</h1>
      <DragDropContext   onDragEnd={handleOnDragEnd}>
<Droppable droppableId='drop-1'>

    {provided=>( 
       <ul className="items"  {...provided.droppableProps} ref={provided.innerRef}>
        {items.map((l,i)=>{
          return(
            <Draggable key={l.id} draggableId={l.id} index={i}>
              {(provided)=>(


            <div key={l.id} className="item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                {l.name}
            </div>
              )}
            </Draggable>
          )
        })}
        {provided.placeholder}
      </ul>)}
        </Droppable>
        </DragDropContext>
    </div>
  );
}

export default App;
