'use client';
import { ClockLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <ClockLoader color='green' />
    </div>
  );
}
