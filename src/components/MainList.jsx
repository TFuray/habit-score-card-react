import ListItem from "./ListItem"

const MainList = ({items}) => {
  return (
  <div>
    {items.length ? (
      <ListItem
      items={items}
      />
    ):(
      <p>Your list is empty</p>
    )}
  </div>
  )
}

export default MainList