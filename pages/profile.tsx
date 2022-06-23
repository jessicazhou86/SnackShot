import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PhotoModal from '../components/PhotoModal';
import { FaHeart } from 'react-icons/fa';
import { app, db } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import { PostObject } from '../data';

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

export interface FriendObject {
  id: number;
  username: string;
}

const Profile: NextPage = () => {
  const [myPosts, setMyPosts] = useState<PostObject[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  // @ts-ignore
  const [modalInfo, setModalInfo] = useState<PostObject>(null);
  const [friends, setFriends] = useState<FriendObject[]>([]);

  const dbInstance = collection(db, 'my_posts');
  const getMyPosts = () => {
    getDocs(dbInstance)
      .then((data) => {
        let arr: any = data.docs.map((item) => {
            return { ...item.data(), id: item.id }
        });
        let sorted = arr.sort((a: PostObject, b: PostObject) => (new Date(b.timestamp.toString()).valueOf() - new Date(a.timestamp.toString()).valueOf()));
        setMyPosts(sorted);
    })
  }

  useEffect(() => {
    getMyPosts();

    const dbInstance2 = collection(db, 'friends');
    const getFriends = () => {
      getDocs(dbInstance2)
        .then((data) => {
          let arr: any = data.docs.map((item) => {
              return { ...item.data(), id: item.id }
          });
          setFriends(arr);
      })
    }
    getFriends();
  }, [])

  const viewSaved = () => {
    let saved = myPosts.filter((post) => post.saved === true);
    setMyPosts(saved);
  }

  // sample user
  const user = {
    username: 'jessicazhou',
    profile_pic: "https://i.ibb.co/CwCCjKk/Screen-Shot-2022-06-20-at-7-36-25-PM.png",
  }

  return (
    <>
    <ProfileBar>
      <BarItem
        style={{cursor: "pointer"}}
        onClick={getMyPosts}
      >
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
        <div><strong>{myPosts.length}</strong></div>
        <div>Posts</div>
      </BarItem>
      <BarItem style={{marginTop: "2.6em"}}>
        <div><strong>{friends.length}</strong></div>
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
            {friends.length &&
              friends.map((friend) =>
                <li
                  key={friend.id}
                >
                  <a
                    id={friend.id.toString()}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      // @ts-ignore
                      console.log('friend id', e.target.getAttribute('id'));
                    }}
                  >@{friend.username}</a>
                </li>
              )}
          </ul>
        </details>
      </BarItem>
      <BarItem
        style={{cursor: "pointer"}}
        onClick={viewSaved}
      >
        <div><FaHeart/></div>
        <div>Saved</div>
      </BarItem>
    </ProfileBar>
      <PostContainer >
        {myPosts.length!== 0 && myPosts.map((post) => {
          return (
            <ImagePost key={post.id}>
              <Image
                src={post?.photo_urls[0]}
                alt="sample photo"
                width={600}
                height={600}
                objectFit="cover"
                style={{borderRadius: "2%"}}
                id={post.id.toString()}
                onClick={(e) => {
                  // @ts-ignore
                  let id =  e.target.getAttribute('id');
                  for (var i = 0; i < myPosts.length; i++) {
                    if (myPosts[i].id === id) {
                      setModalInfo({...myPosts[i]});
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
          // @ts-ignore
          modalInfo={modalInfo}
        />: null}
    </>
  )
}

export default Profile
