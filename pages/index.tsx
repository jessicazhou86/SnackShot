import type { NextPage } from 'next'
import Image from 'next/image'
import PostEntry from '../components/PostEntry';
import styled from 'styled-components';
import posts from '../data';

const PostsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
`;

const Home: NextPage = () => {

  return (
    <PostsContainer>
      {posts.map((post, i) => <PostEntry key={i} post={post}></PostEntry>)}
    </PostsContainer>
  )
}

export default Home
