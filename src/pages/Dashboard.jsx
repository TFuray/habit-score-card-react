import { useState } from 'react'
import InputHabit from '../components/InputHabit'
import ListOne from '../components/ListOne'
import GoodList from '../components/GoodList'
import BadList from '../components/BadList'

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
      <div className='flex justify-center my-16'>
        <InputHabit
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className='flex justify-around'>
        <BadList />
        <ListOne
          // mainList={mainList.filter(item => item.item.toLowerCase())}
          mainList={mainList.filter(item => item.item)}
          setMainList={setMainList}
        />
        <GoodList />
      </div>
    </div>
  )
}

export default Dashboard
