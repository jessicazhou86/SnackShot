import Image from 'next/image';
import { FaRegCommentDots, FaHeart } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { PostObject } from '../data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from 'styled-components';
import { useState } from 'react';
import styles from '../styles/Stars.module.css';
import ReactStars from 'react-stars';

const PostContainer = styled.article`
  max-width: 35em;
  margin: 2em auto;
  flex: 50%;
  padding: 1.5em;
  `;

  const ReactButton = styled.span`
  margin: 2px;
  padding: 10px;
  float: right;3
  &:hover{
    transform: scale(1.2);
  }
  cursor: pointer;
  `;

  const HeartButton = styled(ReactButton)`
  &:hover{
    color: #F57575;
  }
  color: ${props => (props.liked ? ' #F57575' : 'none')}
  `;


interface Props {
  post: PostObject;
  modalInfo: PostObject;
}

const PostEntry = (props : Props) => {
  let {post, modalInfo} = props;
  const [liked, setLiked] = useState(false);

  post = post || modalInfo;

  return (
    <PostContainer>
      <h3 style={{margin: ".5em"}}>{post.restaurant_name}</h3>
      <ReactStars
        count={5}
        size={25}
        color2={'#FFE255'}
        value={post.rating}
        edit={false}
      />
      <div style={{
        width: "100%",
        margin: ".5em",
        textAlign: "right",
        padding: "0 1em"
      }}>
        <MdLocationPin /> {post.location}, {post.timestamp}
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        speed={200}
        spaceBetween={150}
      >
      {post.photo_urls.map((url : string, i : number) => (
        <SwiperSlide key={i}>
          <Image
            src={url}
            alt="sample photo"
            width={800}
            height={800}
            objectFit="cover"
            style={{borderRadius: "2%", margin: "auto"}}
        />
        </SwiperSlide>
      ))}
       </Swiper>
      <HeartButton
        liked={liked}
        onClick={() => {setLiked((prev) => !prev)}}
      ><FaHeart /></HeartButton>
      <ReactButton
      ><FaRegCommentDots /></ReactButton>
      <h5>@{post.username}</h5>
      <span>{post.caption}</span>
    </PostContainer>
  )
}

export default PostEntry;