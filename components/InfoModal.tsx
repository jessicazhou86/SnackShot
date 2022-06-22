interface Props {
  infoModalOpen: boolean,
  setInfoModalOpen: Dispatch<SetStateAction<boolean>>;
  yelpData: object,
}

const PhotoModal = (props: Props) => {
  const {infoModalOpen, setInfoModalOpen, yelpData} = props;

  // document.addEventListener('keydown', e => {
  //   if (e.key === 'Escape' && infoModalOpen) {
  //     setInfoModalOpen(false);
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
          onClick={() => {setInfoModalOpen(false)}}
        ></a>
        {/* {yelpData.restaurant_name} */}
      </header>
      <p>
        Nunc nec ligula a tortor sollicitudin dictum in vel enim.
        Quisque facilisis turpis vel eros dictum aliquam et nec turpis.
        Sed eleifend a dui nec ullamcorper.
        Praesent vehicula lacus ac justo accumsan ullamcorper.
      </p>
    </article>
  </dialog>
  )
}

export default PhotoModal;
