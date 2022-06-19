import { Dispatch, SetStateAction } from "react";
import PostEntry from './PostEntry';

interface Props {
  showModal: boolean,
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const PhotoModal = (props: Props) => {
  const {setShowModal, showModal} = props;

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  });

  return (
    <dialog open>
      <article>
        <header>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            onClick={() => {setShowModal(false)}}
          ></a>
        </header>
        <h2>this is where all the restaurant info that the user inputted will go</h2>
        {/* <PostEntry></PostEntry> */}
      </article>
    </dialog>
  )
}

export default PhotoModal;