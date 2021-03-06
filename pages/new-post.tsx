import type { NextPage } from 'next';
import ReactStars from 'react-stars';
import { MouseEvent, SetStateAction, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { app, db } from '../firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/router'


const NewPost: NextPage = () => {
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>([]);
  const [caption, setCaption] = useState<string>('');
  const [restaurant, setRestaurant] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [address, setAddress] = useState<string[]>([]);
  const [dollarSigns, setDollarSigns] = useState<string>('');
  const [yelpId, setYelpId] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setStateLoc] = useState<string>('')
  const [noMatch, setNoMatch] = useState<boolean>(false);
  const router = useRouter()

  const uploadImages = (e: any) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', e.target.files[0]);
    bodyFormData.append('upload_preset', 's5a8nhsy');
    axios
      .post(
        'https://api.cloudinary.com/v1_1/dtkjt2map/image/upload',
        bodyFormData
      )
      .then((res) => { setPhotos([...photos, res.data.url]) });
  };

  const getMatchingRestaurant = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setIsMatch(false)
    setNoMatch(false);
    e.preventDefault();
    let newName = restaurantName.split(' ').join('-');
    let newLocation = location.split(' ').join('-');
    axios.get(`/api/matching/${newName}/${newLocation}`)
    .then((res) => {
      const match = res.data.businesses[0];
      if (match) {
        setRestaurant(match.name);
        setAddress(match.location.display_address);
        setDollarSigns(match.price);
        setIsMatch(true);
        setYelpId(match.id);
        setCity(match.location.city);
        setStateLoc(match.location.state);
      } else {
        setNoMatch(true);
      }
    })
    .catch((err) => setNoMatch(true));
  }

  const dbInstance = collection(db, 'my_posts');

  const postReview = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log('sending')
    e.preventDefault();
    addDoc(dbInstance, {
      restaurant_name: restaurant,
      yelp_restaurant_id: yelpId,
      timestamp: new Date(),
      location: city + ', ' + state,
      photo_urls: photos,
      rating: rating,
      username: 'jessicazhou',
      caption: caption,
      saved: false,
    });
    router.push('/');
  }

  return (
    <article>
      <h3>Share a new food spot</h3>
      <form>
        <div className="grid">
          <label htmlFor="restaurantName">
            What&#39;s the place called?
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              placeholder="Restaurant name"
              required
              onChange={(e) => setRestaurantName(e.target.value)}
              ></input>
          </label>
          <label htmlFor="location">
            Where is it?
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City name"
              required
              onChange={(e) => setLocation(e.target.value)}
              ></input>
            <button
              onClick={(e) => getMatchingRestaurant(e)}
              style={{
                backgroundColor: "#596B78",
                width: "auto",
                border: "none",
                padding: ".5em"
              }}
            ><FiSearch />  Search</button>
          </label>
        </div>
      {isMatch &&
        <div style={{border: "solid grey 1px", padding: ".5em"}}>
          <strong><MdLocationPin /> {restaurant} {dollarSigns}</strong>
          <div> {address.map((each, i) => <div key={i}>{each}</div>)}</div>
        </div>}
      {noMatch &&
        <div style={{border: "solid grey 1px", padding: ".5em"}}>No restaurants that match your search
      </div>}
      </form>
      <form>
        <div style={{padding: "20px 0"}}>
          Soooo... how was it?
          <ReactStars
            count={5}
            size={26}
            color2={'#FFE255'}
            onChange={(e) => setRating(e)}
          />
        </div>

        <label htmlFor="file">Pics or it didn&#39;t happen
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            multiple
            required
            onChange={(e) => {uploadImages(e)}}
          ></input>
        </label>
        {photos.map((photo, i) => (
          <span key={i} style={{margin: ".3em"}}>
            <Image
             src={photo}
             alt="uploaded image"
             width={100}
             height={100}
             objectFit="cover"
             style={{borderRadius: "10%"}}
           ></Image>
          </span>

        ))}

        <label htmlFor="caption">
          How was your experience?
          <input
            type="textarea"
            id="caption"
            name="caption"
            placeholder="How were the vibes? The food? Good date spot or nice for girls night? :)"
            required
            onChange={(e) => setCaption(e.target.value)}
          ></input>
        </label>

        <button type="submit" onClick={(e) => postReview(e)}>Post</button>
      </form>
    </article>
  )
}

export default NewPost
