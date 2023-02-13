import BadItem from './BadItem'

const BadListContent = ({secondaryHabitList}) => {
  return (
  <ul className="flex flex-col fap-x-8 gap-y-4">
    {secondaryHabitList.map(item => (
      <BadItem
      key={item.id}
      item={item}
      />
    ))}
  </ul>
  )
}

export default BadListContent