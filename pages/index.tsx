import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import PostEntry from '../components/PostEntry';

const Home: NextPage = () => {
  const posts = [
   {
    restaurant_name: 'Hatch',
    timestamp: 'March 20, 2022 | 5:50pm',
    location: 'Los Angeles, CA',
    photo_url: 'https://i.ibb.co/bN48dJr/IMG-8089.jpg',
    rating: 4.5,
    username: 'jessicazhou',
    description: 'Cute girls night, japanese yakitori, drinks yummyyy'
   },
   {
    restaurant_name: 'Thai Basil',
    timestamp: 'June 17, 2022 | 10:47pm',
    location: 'New York',
    photo_url: 'https://picsum.photos/id/456/500',
    rating: 3.5,
    username: 'khaiwakita',
    description: 'Pretty solid thai food. LOVED the spicy oil they had'
   }
  ];

  return (
    <div>
      {posts.map((post, i) => <PostEntry key={i} post={post}></PostEntry>)}
    </div>
  )
}

export default Home
