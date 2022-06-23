import type {DataObject} from './PostEntry';
import type {ReviewObject} from './PostEntry';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import {formatDistanceToNow, parseISO} from 'date-fns';

const Reviews = styled.article`
overflow-y: scroll;
max-height: 25em;
background-color: #19222c;
margin: .5em 0;
padding: 1.5em;
`;

const Review = styled.article`
border: solid #131e26 1px;
background-color: #19222c;
margin: 1em 0;
padding: 1em;
`;

interface Props {
  infoModalOpen: boolean,
  setInfoModalOpen: any,
  yelpData: DataObject,
  reviews: ReviewObject[],
}

const PhotoModal = (props: Props) => {
  const {infoModalOpen, setInfoModalOpen, yelpData, reviews} = props;

  // document.addEventListener('keydown', e => {
  //   if (e.key === 'Escape' && infoModalOpen) {
  //     setInfoModalOpen(false);
  //   }
  // });

  return (
    <dialog open>
      <article style={{width: "80em"}}>
        <header>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            onClick={() => {setInfoModalOpen(false)}}
          ></a>
          <span><i>still not convinced? here is the yelp data...</i></span>
        </header>
        <div>
          <h3 style={{margin: "0"}}>
            {yelpData.name} {yelpData.price}
          </h3>
          <div style={{marginBottom: "1em"}}>
            {yelpData.categories.map((cat: string, i: number) => <span key={i}><i>{cat}, </i></span>)}
          </div>
          <div>
            {yelpData.address}
          </div>
          <div style={{marginBottom: "1em"}}>
            <b><small>{yelpData.phone}</small></b>
          </div>
          <div style={{width: "20em"}}>
            <ReactStars
              count={5}
              size={25}
              color2={'red'}
              value={yelpData.rating}
              edit={false}
            />
          </div>
          <span style={{float: "right", marginTop: "-2em"}}>
            <small><i>
            based on {yelpData.review_count} reviews
            </i></small>
          </span>
        </div>
        <div>
          <Reviews>
            <h4>Reviews</h4>
            {reviews.map((review: ReviewObject, i) => (
              <Review key={i}>
                <div>
                  {review.user.name}
                  <span style={{float: "right", fontSize: ".7em"}}>
                    {formatDistanceToNow(parseISO(review.time_created))} ago
                  </span>
                  <ReactStars
                    count={5}
                    size={15}
                    color2={'white'}
                    value={yelpData.rating}
                    edit={false}
                  />
                </div>
                <div>
                  {review.text}
                </div>
              </Review>
            ))}
          </Reviews>
        </div>
      </article>
    </dialog>
  )
}

export default PhotoModal;
