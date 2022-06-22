import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import React, { useState } from 'react';
import PhotoModal from '../components/PhotoModal';
import posts from '../data';
import { FaHeart } from 'react-icons/fa';


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

const ProfileBar = styled.article`
padding: .5em;
display: flex;
margin-top: 0;
`;

const BarItem = styled.div`
width: 25%;
text-align: center;
margin: auto;
`;

const Profile: NextPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  // sample user
  const user = {
    user_id: 1,
    username: 'jessicazhou',
    profile_pic: "https://i.ibb.co/CwCCjKk/Screen-Shot-2022-06-20-at-7-36-25-PM.png",
    friends: ['meowcakes', 'birdsrnotreal', 'cashmoney'],
    saved_posts: [],
    my_posts: posts
  }

  return (
    <>
    <ProfileBar>
      <BarItem>
        <Image
          src={user.profile_pic}
          alt="profile picture"
          width={100}
          height={100}
          objectFit="cover"
          style={{borderRadius: "50%"}}
        ></Image>
        <div>@{user.username}</div>
      </BarItem>
      <BarItem>
        <div><strong>{posts.length}</strong></div>
        <div>Posts</div>
      </BarItem>
      <BarItem style={{marginTop: "2.6em"}}>
        <div><strong>{user.friends.length}</strong></div>
        <details role="list">
          <summary
            aria-haspopup="listbox"
            style={{
              border: "none",
              color: "#bbc6ce",
              backgroundColor: "#131e26",
              padding: "0",
              marginLeft: "1.5em"
            }}>Friends</summary>
          <ul role="listbox">
            {user.friends.map((friend, i) => <li key={i}><a>@{friend}</a></li>)}
          </ul>
        </details>
      </BarItem>
      <BarItem>
        <div><FaHeart/></div>
        <div>Saved</div>
      </BarItem>
    </ProfileBar>
      <PostContainer >
        {user.my_posts.map((post) => {
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
                  for (var i = 0; i < user.my_posts.length; i++) {
                    if (user.my_posts[i].post_id === id) {
                      setModalInfo(user.my_posts[i]);
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
