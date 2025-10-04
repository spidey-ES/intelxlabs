'use client';
export default function FloatingTab() {
  return (
    <div className=' absolute lg:top-165 left-1/2 -translate-x-1/2 bg-gray-100 rounded-2xl shadow-lg w-11/12 max-w-7xl h-20 z-50 flex flex-row justify-around p-2 md:top-147 md:w-[99vw] gap-1.5'>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>check in</h1>
        <input
          type='date'
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>check out</h1>
        <input
          type='date'
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>Place</h1>
        <input
          type='type'
          placeholder='Place'
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>Accomodations</h1>
        <select className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'>
          <option>Accommodations</option>
          <option>Room</option>
          <option>Villa</option>
          <option>Apartment</option>
        </select>
      </div>
      <div className='mt-4'>
        <button className=' bg-transparent rounded-md  text-xs font-medium hover:text-white w-[150px] h-[30px] hover:bg-black'>
          {`check Availability >> `}
        </button>
      </div>
    </div>
  );
}
