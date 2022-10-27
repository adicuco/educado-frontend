import React, { useState } from 'react';

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

const exampleCourse = {
  "sections": [
    "How to download Rush Royale",
    "How to play CO-OP",
    "How to play PVP"
  ],
  "_id": "6228653fee41451cb9640a82",
  "title": "MWUHAHAHA",
  "description": "WORK U BITCH",
  "category": "",
  "_user": "620e525dbc5384023a2ce500",
  "dateCreated": "2022-03-09T08:28:47.440Z",
  "dateUpdated": "2022-03-09T08:28:47.440Z",
  "__v": 2,
  "published": true,
  "coverImg": "1648541890581-mustache.png"
};

export const Dnd = ({ sections }: { sections: Array<string> }) => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(exampleCourse.sections);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: any) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event: any) {
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
    </div>
  );
}

