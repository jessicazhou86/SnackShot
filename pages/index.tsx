import type { NextPage } from 'next'
import Image from 'next/image'
import PostEntry from '../components/PostEntry';
import styled from 'styled-components';

export interface PostObject {
  restaurant_name: string;
  timestamp: string;
  location: string;
  photo_urls: string[];
  rating: number;
  username: string;
  description: string;
}

const PostsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
`;

const Home: NextPage = () => {
  const posts : PostObject[] = [
   {
    restaurant_name: 'Hatch',
    timestamp: 'March 20, 2022 | 5:50pm',
    location: 'Los Angeles, CA',
    photo_urls: [
      'https://i.ibb.co/bN48dJr/IMG-8089.jpg',
      'https://i.ibb.co/Z2bLYhX/IMG-7933.jpg',
      'https://i.ibb.co/0BYVNfK/IMG-7934.jpg'
    ],
    rating: 4.5,
    username: 'jessicazhou',
    description: 'Cute girls night, japanese yakitori, drinks yummyyy'
   },
   {
    restaurant_name: 'Thai Basil',
    timestamp: 'June 17, 2022 | 10:47pm',
    location: 'New York',
    photo_urls: [
      'https://i.ibb.co/bN48dJr/IMG-8089.jpg',
      'https://i.ibb.co/bN48dJr/IMG-8089.jpg',
      'https://i.ibb.co/bN48dJr/IMG-8089.jpg'],
    rating: 3.5,
    username: 'khaiwakita',
    description: 'Pretty solid thai food. LOVED the spicy oil they had'
   }
  ];

  return (
    <PostsContainer>
      {posts.map((post, i) => <PostEntry key={i} post={post}></PostEntry>)}
    </PostsContainer>
  )
}

export default Home
