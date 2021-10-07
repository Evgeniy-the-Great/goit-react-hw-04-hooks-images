import React, { useState } from "react";
import Modal from "../Modal/Modal";

const ImageGalleryItem = ({ pictures }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");

  const toggleModal = (largeImageURL) => {
    setShowModal(!showModal);
    setLargeImage(largeImageURL);
  };

  return (
    <>
      {pictures.map((picture) => {
        const togglePicture = () => toggleModal(picture.largeImageURL);
        return (
          <li className="ImageGalleryItem" key={picture.id}>
            <img
              src={picture.webformatURL}
              alt={picture.tags}
              className="ImageGalleryItem-image"
              onClick={togglePicture}
              id={picture.largeImageURL}
            />
          </li>
        );
      })}
      {showModal && <Modal onClose={toggleModal} picture={largeImage} />}
    </>
  );
};

export default ImageGalleryItem;

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//     largeImage: '',
//   };

//   toggleModal = largeImageURL => {
//     this.setState(prev => ({
//       showModal: !prev.showModal,
//       largeImage: largeImageURL,
//     }));
//   };

//   render() {
//     return (
//       <>
//         {this.props.pictures.map(picture => {
//           const togglePicture = () => this.toggleModal(picture.largeImageURL);
//           return (
//             <li className="ImageGalleryItem" key={picture.id}>
//               <img
//                 src={picture.webformatURL}
//                 alt={picture.tags}
//                 className="ImageGalleryItem-image"
//                 onClick={togglePicture}
//                 id={picture.largeImageURL}
//               />
//             </li>
//           );
//         })}
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal} picture={this.state.largeImage} />
//         )}
//       </>
//     );
//   }
// }

// export default ImageGalleryItem;
