
const BadItem = ({item}) => {
  return (
  <li className="flex gap-x-8 gap-y-4 justify-between">
    <p className="text-lg">{item.item}</p>
  </li>
  )
}

export default BadItem