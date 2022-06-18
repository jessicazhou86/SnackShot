import { FaHome } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';


const Nav = () => {
  return (
    <nav>
      <ul>
        <li><h2>SnackShot</h2></li>
      </ul>
      <ul>
        <li><a href="#" role="button"><FaHome /></a></li>
        <li><a href="#" role="button"><MdPhotoCamera /></a></li>
        <li><a href="#" role="button"><BsFillPersonFill /></a></li>
      </ul>
    </nav>
  )
}

export default Nav;