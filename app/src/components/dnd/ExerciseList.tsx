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
import { Exercise } from '../../interfaces/Exercise';

const ex1: Exercise = {
  title: "string",
  description: "string",
  exerciseNumber: 1,
  content: {
      type: "string",
      url: "string"
  },
  on_wrong_feedback: {
      type: "string",
      url: "string"
  },
  answers: [{
      answerNumber: 1,
      text: "string",
      correct: true
  },
  {
      answerNumber: 2,
      text: "string",
      correct: false
  }]
}

const testExercises =
    [
      ex1,
      {},
      {},
      {}
    ]

export const ExerciseList = ({ exercises }: { exercises: Array<any> }) => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(testExercises);

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

          {items.map(id => <SortableItem key={id} id={id} />)}
        

        
      </DndContext>
    </div>
  );
}

