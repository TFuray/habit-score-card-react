import ListOneContent from './ListOneContent.jsx'

const ListOne = ({ mainList }) => {
  return (
    <section className='flex flex-col'>
      <h3 className='text-center mb-8 text-2xl font-bold underline'>All Habits</h3>
      {mainList.length ? <ListOneContent mainList={mainList} /> : <p>List Empty</p>}
    </section>
  )
}

export default ListOne
