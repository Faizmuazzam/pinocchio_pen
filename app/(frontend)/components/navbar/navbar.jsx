import { IconCategory } from '@tabler/icons-react';
import Image from 'next/image';
import logo from '@/app/assets/images/astroclash.webp'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='block fixed top-0 left-0 right-0 z-10 bg-[#22252d]'>
      <div className='flex justify-between items-center min-h-[88px] px-10 py-5 gap-x-5'>
        <div className='max-w-full'>
          <IconCategory stroke={2} />
        </div>
        <div className='block'>
          <Image
            src={logo}
            alt="Picture of the author"
            className='max-w-[152px] h-auto'
          />
        </div>
        <div className='block'>
          <Link className='flex min-h-10 px-4 py-2 text-[#fcfcf9] text-sm font-bold border-2 border-[#7f85964d] rounded-lg hover:bg-[#fcfcf9] hover:text-[#22252d] transition-all' href={'/'}>
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
