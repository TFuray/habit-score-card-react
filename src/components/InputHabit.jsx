import { useRef, useState } from 'react'

const InputHabit = ( {handleSubmit, newItem, setNewItem}) => {
  // const [newItem, setNewItem] = useState('')

  const inputRef = useRef()

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoFocus
        ref={inputRef}
        id='addItem'
        placeholder='Add Habit'
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}
      >
        Submit
      </button>
    </form>
  )
}

export default InputHabit
