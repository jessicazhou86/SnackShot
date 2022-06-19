import { AiFillHome } from 'react-icons/ai';
import { MdPhotoCamera } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import Link from 'next/link';


const Nav = () => {
  return (
    <nav>
      <ul>
        <li><h2>SnackShot</h2></li>
      </ul>
      <ul>
        <Link href='/'>
         <li><a href="#" role="button"><AiFillHome size={30}/></a></li>
        </Link>
        <Link href='/new-post'>
         <li><a href="#" role="button"><MdPhotoCamera size={30}/></a></li>
        </Link>
        <Link href='/profile'>
         <li><a href="#" role="button"><BsFillPersonFill size={30}/></a></li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;