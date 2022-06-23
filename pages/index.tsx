import type { NextPage } from 'next'
import Image from 'next/image'
import PostEntry from '../components/PostEntry';
import styled from 'styled-components';
import posts from '../data';
import { app, db } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';


const PostsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
`;

const Home: NextPage = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const dbInstance = collection(db, 'my_posts');
    const getPosts = () => {
      getDocs(dbInstance)
        .then((data) => {
          let arr: any = data.docs.map((item) => {
              return { ...item.data(), id: item.id }
          });
          let sorted = arr.sort((a,b) => (b.timestamp - a.timestamp));
          setAllPosts(sorted);
      })
    }
    getPosts();
  }, [allPosts])

  return (
    <PostsContainer>
      {allPosts.length!== 0 && allPosts.map((post, i) => <PostEntry key={i} post={post}></PostEntry>)}
    </PostsContainer>
  )
}

export default Home
