import ListItem from './ListItem'

const ListOneContent = ({mainList}) => {
  return (
  <ul>
    {mainList.map(item => (
      <ListItem
      key={mainList.id}
      item={item}
    />
    ))}
  </ul>
  )
}

export default ListOneContent