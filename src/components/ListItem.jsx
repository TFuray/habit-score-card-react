
const ListItem = ({item}) => {
  return (
  <li>
    <button className="btn btn-outline btn-warning btn-sm">Bad Habbit</button>
    <p className="text-lg">{item.item}</p>
  </li>
  )
}

export default ListItem