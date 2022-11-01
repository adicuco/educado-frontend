import { Link } from 'react-router-dom';

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
    <div className="flex justify-between items-center border rounded p-2">
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} >
        <div className='btn btn-ghost'>
          <ChevronUpDownIcon width={24} />
        </div>
      </div>

      <div className='flex justify-between w-full space-x-2 ml-2'>
        <p className='font-semibold'>{props.id}</p>
        <Link to="/"><PencilSquareIcon width={20} className="text-blue-500 hover:text-blue-700" /></Link>
      </div>
    </div>
  );
}