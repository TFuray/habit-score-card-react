import { useRef } from 'react'

const InputHabit = (newItem, setNewItem, handleSubmit) => {
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
        onClick={() => inpurtRef.current.focus()}
      >
        Submit
      </button>
    </form>
  )
}

export default InputHabit
