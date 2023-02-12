import { useState } from 'react'
import InputHabit from '../components/InputHabit'
import MainList from '../components/MainList'

const Dashboard = () => {
  const [mainList, setMainList] = useState(
    JSON.parse(localStorage.getItem('habitList')) || []
  )
  const [badList, setBadList] = useState(
    JSON.parse(localStorage.getItem('badHabitList')) || []
  )
  const [goodList, setGoodList] = useState(
    JSON.parse(localStorage.getItem('goodHabitList')) || []
  )
  const [newItem, setNewItem] = useState('')


  const setAndSaveItems = newItems => {
    setMainList(newItems)
    localStorage.setItem('habitList', JSON.stringify(newItems))
  }

  const addItem = item => {
    const id = mainList.length ? mainList[mainList.length - 1].id + 1 : 1
    const myNewItem = { id, item }
    const listItems = [...mainList, myNewItem]
    setAndSaveItems(listItems)
  }

  // const handleGoodSwitch = id => {
  //   const bad = mainList.map(item => item.id === id ? {...badList, setBadList(item)} : item)

  // }

  const handleSubmit = e => {
    e.preventDefault()
    if (!newItem) {
      return
    }
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div>
      <InputHabit
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        setAndSaveItems={setAndSaveItems}
      />
      <div>
        <MainList
          mainList={mainList.filter(item => item.item)}
          setMainList={setMainList}
        />
      </div>
    </div>
  )
}

export default Dashboard
