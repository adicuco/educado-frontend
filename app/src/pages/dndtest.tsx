import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import Droppable from '../components/Droppable';
import Draggable from '../components/Draggable'

function DnD() {
    const containers = ['A', 'B', 'C'];
    const [parent, setParent] = useState(null);
    const element1 = <div className='btn rounded bg-blue-500'>Drag this</div>;
    const element2 = 
    <ul>
      <div>
      <button onClick={() => alert("hello")} className='btn bg-red-500'>RED</button>
      <button className='btn bg-red-700'>REDDER</button>
      <button onDragLeave={()=> alert("you dropped something")} className='btn bg-red-900'>REDDEST</button>
      </div>
    </ul>
    
    const draggableMarkup = (
      <Draggable id="draggable">{element1}</Draggable>
    );

    function handleDragEnd(event: any) {
        const {over} = event;
    
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
      }
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
  
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : 'drop here'}
          </Droppable>
        ))}

        <Droppable key={'red'} id={'red'}>
          {element2}
        </Droppable>

        
      </DndContext>
    );

  };

export default DnD;