import Image from 'next/image';
import { FaRegCommentDots, FaHeart } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { PostObject } from '../data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import styles from '../styles/Stars.module.css';
import ReactStars from 'react-stars';
import InfoModal from './InfoModal';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebaseConfig.js';


const PostContainer = styled.article`
  max-width: 35em;
  margin: 2em auto;
  flex: 50%;
  padding: 1.5em;
  overflow: visible;
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

export interface DataObject {
  name: string,
  address: string,
  phone: string,
  price: string,
  rating: number,
  categories: string[],
  review_count: number
}

export interface ReviewObject {
  id: string,
  url: string,
  text: string,
  rating: number,
  time_created: string,
  user: {
    name: string
  },
}

interface Props {
  post: PostObject;
}

interface CategoryObj {
  title: string
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    liked?: boolean;
    post?: string;
  }
}

const PostEntry = (props : Props) => {
  let {post} = props;
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);
  const [yelpData, setYelpData] = useState<DataObject | null>(null);
  const [reviews, setReviews] = useState<ReviewObject[] | null>(null);
  const [usePost, setUsePost] = useState<PostObject | null>(post);

  useEffect(() => {
    setUsePost(post);
  }, [post]);

  const getYelpData = () => {
    axios.get(`/api/info/${usePost?.yelp_restaurant_id}`)
    .then((res) => {
      let info = res.data.info;
      setYelpData({
        name: info.name,
        address: info.location.display_address.join(' '),
        phone: info.display_phone,
        price: info.price,
        rating: info.rating,
        categories: info.categories.map((each: CategoryObj) => each.title),
        review_count: info.review_count
      });
      setReviews(res.data.reviews.reviews);
    });
  }

  const updateSaved = async () => {
    // @ts-ignore
    const newObj: PostObject = {...post};
    newObj.saved = !post.saved;
    await setDoc(doc(db, "my_posts", post.id.toString()), newObj);
  }

  return (
    <>
      {infoModalOpen && yelpData && reviews &&
      <InfoModal
        infoModalOpen={infoModalOpen}
        setInfoModalOpen={setInfoModalOpen}
        yelpData={yelpData}
        reviews={reviews}
      />
      }
      <PostContainer>
        <h3 style={{
          margin: ".5em",
          cursor: "pointer",
          }}
         post={post.yelp_restaurant_id}
         onClick={() => {
          setInfoModalOpen(true);
          getYelpData();
        }}
        >{post.restaurant_name}</h3>
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
          <MdLocationPin /> {post.location} | {format(post.timestamp.seconds*1000, "PPp")}
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          speed={200}
          spaceBetween={150}
        >
        {post?.photo_urls.map((url : string, i : number) => (
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
          liked={post.saved}
          onClick={() => {
            updateSaved();
          }}
        ><FaHeart /></HeartButton>
        <ReactButton
        ><FaRegCommentDots /></ReactButton>
        <h5>@{post.username}</h5>
        <span>{post.caption}</span>
      </PostContainer>
    </>
  )
}

export default PostEntry;