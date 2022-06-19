import type { NextPage } from 'next';
import ReactStars from 'react-stars';
import { SetStateAction, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';


const NewPost: NextPage = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [rating, setRating] = useState(0);
  const [photos, setPhotos] = useState<string[]>([]);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');

  const uploadImages = (e: { target: { files: (string | Blob)[]; }; }) => {
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

  return (
    <article>
      <form>
        <h3>Share a new food spot</h3>

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
          </label>
        </div>

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
            accept="/jpeg, /png"
            multiple
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

        <button>Post</button>
      </form>
    </article>
  )
}

export default NewPost
