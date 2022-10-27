import React from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// icons
import { ChevronUpDownIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex justify-between items-center border rounded p-2">
      <div className='flex space-x-2'>
        <ChevronUpDownIcon width={24} />
        <p className='font-semibold'>{props.id}</p>
      </div>

      <PencilSquareIcon width={20} className="text-blue-500 hover:text-blue-700" />
    </div>
  );
}