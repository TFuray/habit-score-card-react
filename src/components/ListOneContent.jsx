import ListItem from './ListItem'

const ListOneContent = ({mainList}) => {
  return (
  <ul className='flex flex-col gap-x-8 gap-y-4 '>
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