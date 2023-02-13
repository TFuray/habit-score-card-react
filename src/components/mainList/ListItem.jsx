const ListItem = ({ item, handleBadSwitch }) => {
  return (
    <li className='flex gap-x-8 gap-y-4 justify-between'>
      <button onClick={() => handleBadSwitch(item.id)} className='btn btn-outline btn-error btn-sm'>Bad Habbit</button>
      <p className='text-lg'>{item.item}</p>
      
      <button className="btn btn-outline btn-secondary btn-sm">Good Habit</button>
    </li>
  )
}

export default ListItem
