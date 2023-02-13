import ListItem from './ListItem'

const ListOneContent = ({mainList, handleBadSwitch}) => {
  return (
  <ul className='flex flex-col gap-x-8 gap-y-4 '>
    {mainList.map(item => (
      <ListItem
      key={mainList.id}
      item={item}
      // handleBadSwitch={handleBadSwitch}
    />
    ))}
  </ul>
  )
}

export default ListOneContent