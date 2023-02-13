import ListItem from './ListItem'

const ListOneContent = ({ mainList, handleBadSwitch, handleGoodSwitch }) => {
  return (
    <ul className='flex flex-col gap-x-8 gap-y-4 '>
      {mainList.map(item => (
        <ListItem
          key={item.id}
          item={item}
          handleBadSwitch={handleBadSwitch}
          handleGoodSwitch={handleGoodSwitch}
        />
      ))}
    </ul>
  )
}

export default ListOneContent
