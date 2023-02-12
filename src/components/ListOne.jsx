import ListOneContent from './ListOneContent.jsx'

const ListOne = ({ mainList }) => {
  return (
    <main>
      {mainList.length ? <ListOneContent mainList={mainList} /> : <p>List Empty</p>}
    </main>
  )
}

export default ListOne
