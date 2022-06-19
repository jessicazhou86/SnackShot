import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import React, { useState } from 'react';
import PhotoModal from '../components/PhotoModal';


const PostContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const ImagePost = styled.div`
  flex: 33.33%;
  padding: 10px;
  &:hover {
    transform: scale(1.02);
  }
  cursor: pointer;
}
`;

const Profile: NextPage = () => {
  const posts = [
    {
     restaurant_name: 'Hatch',
     timestamp: 'March 20, 2022 | 5:50pm',
     location: 'Los Angeles, CA',
     photo_urls: ['https://i.ibb.co/bN48dJr/IMG-8089.jpg'],
     rating: 4.5,
     username: 'jessicazhou',
     description: 'Cute girls night, japanese yakitori, drinks yummyyy'
    },
    {
     restaurant_name: 'Thai Basil',
     timestamp: 'June 17, 2022 | 10:47pm',
     location: 'New York',
     photo_urls: ['https://picsum.photos/id/456/500'],
     rating: 3.5,
     username: 'khaiwakita',
     description: 'Pretty solid thai food. LOVED the spicy oil they had'
    },
    {
      restaurant_name: 'Hatch',
      timestamp: 'March 20, 2022 | 5:50pm',
      location: 'Los Angeles, CA',
      photo_urls: ['https://i.ibb.co/bN48dJr/IMG-8089.jpg'],
      rating: 4.5,
      username: 'jessicazhou',
      description: 'Cute girls night, japanese yakitori, drinks yummyyy'
     },
     {
      restaurant_name: 'Thai Basil',
      timestamp: 'June 17, 2022 | 10:47pm',
      location: 'New York',
      photo_urls: ['https://picsum.photos/id/456/500'],
      rating: 3.5,
      username: 'khaiwakita',
      description: 'Pretty solid thai food. LOVED the spicy oil they had'
     },
     {
      restaurant_name: 'Hatch',
      timestamp: 'March 20, 2022 | 5:50pm',
      location: 'Los Angeles, CA',
      photo_urls: ['https://i.ibb.co/bN48dJr/IMG-8089.jpg'],
      rating: 4.5,
      username: 'jessicazhou',
      description: 'Cute girls night, japanese yakitori, drinks yummyyy'
     },
     {
      restaurant_name: 'Thai Basil',
      timestamp: 'June 17, 2022 | 10:47pm',
      location: 'New York',
      photo_urls: ['https://picsum.photos/id/456/500'],
      rating: 3.5,
      username: 'khaiwakita',
      description: 'Pretty solid thai food. LOVED the spicy oil they had'
     },
   ];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PostContainer>
        {posts.map((post, i) => {
          return (
            <ImagePost key={i}>
              <Image
                src={post.photo_urls[0]}
                alt="sample photo"
                width={600}
                height={600}
                objectFit="cover"
                style={{borderRadius: "2%"}}
                onClick={() => { setShowModal(true) }}
              ></Image>
            </ImagePost>
          )
        })}
      </PostContainer>
      {showModal ?
        <PhotoModal
          setShowModal={setShowModal}
          showModal={showModal}
        />: null}
    </>
  )
}

export default Profile
