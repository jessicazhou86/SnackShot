import { AiFillHome } from 'react-icons/ai';
import { MdPhotoCamera } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return (
    <nav style={{
      position: "fixed",
      zIndex: "99",
      width: "100%",
      backgroundColor: "#0E151B",
      height: "5.5em",
      padding: "1em",
      float: "left",
      top: "0",
      left: "0"
    }}>
      <ul>
        <li><h2 style={{margin: "1em"}}>SnackShot</h2></li>
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