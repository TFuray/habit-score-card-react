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
  }
 

  const addItem = item => {
    const id = mainList.length ? mainList[mainList.length - 1].id + 1 : 1
    const myNewItem = { id, item }
    const listItems = [...mainList, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleBadSwitch= id => {
    const badFilter = mainList.filter(item => item.id === id)
    console.log(badFilter)
    const badItems = [...badList, badFilter]
    setAndSaveBadItems(badItems)
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
    <div>
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
        />
        <BadList
          secondaryHabitList={goodList.filter(item => item.item)} 
          title='Good Habits'
        />
      </main>
    </div>
  )
}

export default Dashboard
