import React from 'react'

function DragDrop() {

    const [sectionItems, setSectionItems] = React.useState([])
    const [newSectionItem, setNewSectionItem] = React.useState("")
    const dragItem = React.useRef<any>(null)
    const dragOverItem = React.useRef<any>(null)
    
const handleSort= () => {

    let _sectionItems=[...sectionItems]

    const draggedItemContent=_sectionItems.splice(dragItem.current, 1) [0]
    
    _sectionItems.splice(dragOverItem.current, 0, draggedItemContent)

    dragItem.current = null
    dragOverItem.current = null

    setSectionItems(_sectionItems)

}

const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewSectionItem(e.target.value)
}
   
const handleAddItem = () => {
    const _sectionItems = [...sectionItems]
    _sectionItems.push(newSectionItem)
    setSectionItems(_sectionItems)
}

    return (
        <div className="DragDrop">
            <h2>Course Section List</h2>
            <div className='input-group'>
                <input type="text" name="sectionName" placeholder="section title" onChange={handleNameChange}/>
                <button className='btn bg-blue-500 rounded' onClick={handleAddItem}>Add Section</button>
            </div>

            <div className='listContainer'>
                {
                sectionItems.map((item, index) => (

                    <div key={index}
                        className='cursor-move bg-teal-400 text-center w-64 py-4 m-2'
                        draggable
                        onDragStart={(e) => dragItem.current = index}
                        onDragEnter={(e)=> dragOverItem.current = index}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}>
                        <i className='fa-solid fa-bars'></i>
                        <h3>{item}</h3>
                    </div>
                ))
            } </div>
        </div>


    )
}

export default DragDrop;


