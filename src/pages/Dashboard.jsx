import { useState } from 'react'
import InputHabit from '../components/InputHabit'
import MainList from '../components/MainList'

const Dashboard = () => {
  const [newItem, setNewItem] = useState('')
  const [mainList, setMainList] = useState(
    JSON.parse(localStorage.getItem('habitList' || []))
  )
  const [badList, setBadList] = useState([])
  const [goodList, setGoodList] = useState([])

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

  const handleSubmit = e => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }


  return (
    <div>
      <InputHabit
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <div>
        <MainList 
        items={mainList.filter(item => item.item.toLowerCase())}
        setMainList={setMainList}
        />
      </div>
    </div>
  )
}

export default Dashboard
