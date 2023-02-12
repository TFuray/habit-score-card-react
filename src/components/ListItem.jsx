
const ListItem = ({mainList}) => {
  return (
  <li>
    <button className="btn btn-outline btn-warning">Bad Habbit</button>
    <p>{mainList.item}</p>
  </li>
  )
}

export default ListItem