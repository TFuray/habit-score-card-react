import BadListContent from './BadListContent'

const BadList = ({ secondaryHabitList, title }) => {
  return (
    <section className='flex flex-col grow'>
      <h3 className='text-center mb-8 text-2xl font-bold underline'>{title}</h3>
      {secondaryHabitList.length ? (
        <BadListContent secondaryHabitList={secondaryHabitList} />
      ) : (
        <p className='text-center'>List Empty</p>
      )}
    </section>
  )
}

export default BadList
