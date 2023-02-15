const Header = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Habit Score</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href="github.com/tfuray">@TFuray</a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
    </div>

    // <div className='navbar bg-base-100'>
    //   <div className='flex-1 justify-center flex-col'>
    //     <h2 className='text-3xl font-bold my-5 '>Habit Score Card</h2>
    //     <p>Write down all habits throughout the day.</p>
    //     <p>mark them either positive or negative.</p>
    //   </div>
    //   <div className='flex-none'>

    //   </div>
    // </div>
  )
}

export default Header
