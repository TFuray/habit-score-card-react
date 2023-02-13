import GoodItem from './GoodItem'

const GoodListContent = ({ secondaryHabitList }) => {
  return (
    <ul className='flex flex-col fap-x-8 gap-y-4'>
      {secondaryHabitList.map(item => (
        <GoodItem key={item.Id} item={item} />
      ))}
    </ul>
  )
}

export default GoodListContent
