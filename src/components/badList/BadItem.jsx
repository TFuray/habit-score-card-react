const BadItem = ({ item }) => {
  return (
    <li className='flex gap-x-8 gap-y-4 justify-start'>
      <div className='flex space-x-4'>
        <svg
          aria-hidden='true'
          data-icon='circle-xmark'
          role='img'
          class='w-9'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path
            fill='rgb(225, 114, 114)
'
            d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z'
          />
        </svg>
      </div>
      <p className='text-lg'>{item.item}</p>
    </li>
  )
}

export default BadItem
