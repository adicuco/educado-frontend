import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// DND-KIT
import {
  DndContext,
  closestCenter,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

// Components
import { SortableItem } from './@dnd/SortableItem';
import { Item } from './@dnd/Item';
import { PlusIcon } from '@heroicons/react/24/outline';

// Interfaces
type Inputs = {
  input: string
}


export const SectionList = ({ sections }: { sections: Array<string> }) => {
  // React useForm setup
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); }

  // States
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(sections);


  // Setup of pointer and keyboard sensor
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // handle start of dragging
  const handleDragStart = (event: any) => {
    const { active } = event;
    setActiveId(active.id);
  }

  // handle end of dragging
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className='flex flex-col space-y-2'>
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >

        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map(id => <SortableItem key={id} id={id} />)}
        </SortableContext>

        <DragOverlay>
          {activeId ? <Item id={activeId} /> : null}
        </DragOverlay>
      </DndContext>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center border rounded p-2">
          <div >
            <button type="submit" className='btn btn-ghost'>
              <PlusIcon width={24} />
            </button>
          </div>

          <div className='flex justify-between w-full space-x-2 ml-2'>
            <label htmlFor='title' className='hidden'>Add New</label>
            <input type="text" defaultValue={"Add new"}
              className="form-field focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent border-0 w-full shadow-none"
              {...register("input", { required: false })}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

