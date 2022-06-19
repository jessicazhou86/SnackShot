import type { NextPage } from 'next';
import ReactStars from 'react-stars';
import { useState } from 'react';

const NewPost: NextPage = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [rating, setRating] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [caption, setCaption] = useState('');

  return (
    <article>
      <form>
        <h3>Share a new food spot</h3>

        <label htmlFor="restaurantname">
          Where&#39;d you go?
          <input type="text" id="restaurantname" name="restaurantname" placeholder="Search for restaurant name" required></input>
        </label>

        <div style={{padding: "20px 0"}}>
          Soooo... how was it?
          <ReactStars
            count={5}
            size={26}
            color2={'#FFE255'}
          />
        </div>

        <label htmlFor="file">Pics or it didn&#39;t happen
          <input
            type="file"
            id="file"
            name="file"
          ></input>
        </label>

        <label htmlFor="caption">
          How was your experience?
          <input
            type="textarea"
            rows="3"
            id="caption"
            name="caption"
            placeholder="How were the vibes? The food? Good date spot or nice for girls night? :)" required
          ></input>
        </label>

        <button>Post</button>
        </form>
    </article>
  )
}

export default NewPost
