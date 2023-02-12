import ListItem from './ListItem.jsx'

const MainList = ({ mainList }) => {
  return (
    <div>
      {mainList.length ? <ListItem mainList={mainList} /> : <p>List Empty</p>}
    </div>
  )
}

export default MainList
