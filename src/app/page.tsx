import Counter from '@/components/Counter';
import { log } from 'console';
import Image from 'next/image';
import os from 'os';

export default function Home() {
  console.log('HI! - 서버');
  console.log(os.hostname());

  return (
    <>
      <h1>Homepage!</h1>
      <Counter />
    </>
  );
}
