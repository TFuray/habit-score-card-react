import { useState } from 'react'

const InputHabit = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Enter some text'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default InputHabit
