import { useState } from 'react'
import InputHabit from '../components/InputHabit'
import ListOne from '../components/mainList/ListOne'
import GoodList from '../components/goodList/GoodList'
import BadList from '../components/badList/BadList'

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

  const setAndSaveBadItems = newItems => {
    setBadList(newItems)
    localStorage.setItem('badHabitList', JSON.stringify(newItems))
    updateLocalStorage()
  }

  const setAndSaveGoodItems = newItems => {
    setGoodList(newItems)
    localStorage.setItem('goodHabitList', JSON.stringify(newItems))
    updateLocalStorage()
  }

  const updateLocalStorage = () => {
    localStorage.setItem('habitList', JSON.stringify(mainList))
  }

  const addItem = item => {
    const id = mainList.length ? mainList[mainList.length - 1].id + 1 : 0
    const myNewItem = { id, item }
    const listItems = [...mainList, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleBadSwitch = id => {
    const badFilter = mainList.filter(item => item.id === id)
    setMainList(mainList.filter(item => item.id !== id))
    console.log(badFilter)
    console.log(badList.length)
    const Id = badList.length ? badList.length + 1 : 0
    const item = badFilter[0].item
    const newBadItem = { Id, item }
    const listBadItems = [...badList, newBadItem]
    setAndSaveBadItems(listBadItems)
    updateLocalStorage()
  }

  const handleGoodSwitch = id => {
    const goodFilter = mainList.filter(item => item.id === id)
    setMainList(mainList.filter(item => item.id !== id))
    console.log(goodFilter)
    const Id = goodList.length ? goodList.length + 1 : 0
    const item = goodFilter[0].item
    const newGoodItem = { Id, item }
    const listGoodItems = [...goodList, newGoodItem]
    setAndSaveGoodItems(listGoodItems)
    updateLocalStorage()
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!newItem) {
      return
    }
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className='mx-20'>
      <div className='flex justify-center my-16'>
        <InputHabit
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
      </div>
      <main className='flex justify-around'>
        <BadList
          secondaryHabitList={badList.filter(item => item.item)}
          title='Bad Habits'
        />
        <ListOne
          // mainList={mainList.filter(item => item.item.toLowerCase())}
          mainList={mainList.filter(item => item.item)}
          handleBadSwitch={handleBadSwitch}
          handleGoodSwitch={handleGoodSwitch}
        />
        <GoodList
          secondaryHabitList={goodList.filter(item => item.item)}
          title='Good Habits'
        />
      </main>
    </div>
  )
}

export default Dashboard
