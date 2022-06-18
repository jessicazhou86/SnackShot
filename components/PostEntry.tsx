import Image from 'next/image';
import { FaRegCommentDots, FaHeart } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';



const PostEntry = ({post}) => {
  return (
    <article>
       <h3>{post.restaurant_name}</h3>
       <span><MdLocationPin /> {post.location}, {post.timestamp}</span>
       <Image
        src={post.photo_url}
        alt="sample photo"
        width={700}
        height={700}
        objectFit="cover"
      />
      <h5>@{post.username}</h5>
      <button><FaHeart /></button>
      <button><FaRegCommentDots /></button>
      <span>{post.description}</span>
    </article>
  )
}

export default PostEntry;

// {
//   restaurant_name: 'Thai Basil',
//   location: 'New York',
//   photo_url: 'https://picsum.photos/id/237/500',
//   rating: 3.5,
//   username: 'khaiwakita',
//  }