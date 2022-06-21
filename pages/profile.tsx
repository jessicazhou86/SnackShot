import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import React, { useState } from 'react';
import PhotoModal from '../components/PhotoModal';
import posts from '../data';

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

  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  return (
    <>
      <PostContainer >
        {posts.map((post) => {
          return (
            <ImagePost key={post.post_id}>
              <Image
                src={post.photo_urls[0]}
                alt="sample photo"
                width={600}
                height={600}
                objectFit="cover"
                style={{borderRadius: "2%"}}
                id={post.post_id}
                onClick={(e) => {
                  let id =  Number(e.target.getAttribute('id'));
                  for (var i = 0; i < posts.length; i++) {
                    if (posts[i].post_id === id) {
                      setModalInfo(posts[i]);
                      break;
                    }
                  }
                  setShowModal(true)
                }}
              ></Image>
            </ImagePost>
          )
        })}
      </PostContainer>
      {showModal ?
        <PhotoModal
          setShowModal={setShowModal}
          showModal={showModal}
          modalInfo={modalInfo}
        />: null}
    </>
  )
}

export default Profile
