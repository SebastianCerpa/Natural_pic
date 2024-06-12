import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext.jsx";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const addFavorite = (id) => {
    const newPhotos = photos.map((element) => {
      if (element.id === id) {
        // Cambié 'index' a 'id'
        return {
          ...element,
          liked: !element.liked,
        };
      }
      return element;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((element) => (
        <div
          onClick={() => addFavorite(element.id)}
          key={element.id}
          className="photo"
          style={{ backgroundImage: `url(${element.src.tiny})` }}
        >
          <IconHeart filled={element.liked} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
