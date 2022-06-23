import { Dispatch, SetStateAction } from "react";
import PostEntry from './PostEntry';
import type {PostObject} from '../data';

interface Props {
  showModal: boolean,
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalInfo: PostObject,
}

const PhotoModal = (props: Props) => {
  const {setShowModal, showModal, modalInfo} = props;

  // document.addEventListener('keydown', e => {
  //   if (e.key === 'Escape' && showModal) {
  //     setShowModal(false);
  //   }
  // });

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
        <PostEntry post={modalInfo}></PostEntry>
      </article>
    </dialog>
  )
}

export default PhotoModal;