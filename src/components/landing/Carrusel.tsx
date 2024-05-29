import Gallery from "react-image-gallery";
const ImageGallery = (Gallery as any).default ?? Gallery;
import 'react-image-gallery/styles/css/image-gallery.css'

function Carrusel(){
    const images = [
        {
            original: 'https://i.ibb.co/YWYLyc5/2.png'
        },
        {
            original: 'https://i.ibb.co/q9T3Dtd/Whats-App-Image-2024-05-29-at-11-23-47-AM.jpg'
        },
        {
            original: 'https://i.ibb.co/3T1HJGT/Whats-App-Image-2024-05-29-at-11-50-42-AM.jpg'
        },
        {
            original: 'https://i.ibb.co/5knDCr9/Whats-App-Image-2024-05-29-at-11-50-42-AM-1.jpg'
        },
        {
            original: 'https://i.ibb.co/hRPcxKW/Whats-App-Image-2024-05-29-at-11-50-42-AM-2.jpg'
        },
        {
            original: 'https://i.ibb.co/c2cKFSW/Whats-App-Image-2024-05-29-at-11-50-43-AM.jpg'
        },
        {
            original: 'https://i.ibb.co/vY7MS2L/Whats-App-Image-2024-05-29-at-11-50-44-AM.jpg'
        }
    ]


    return(
        <div>
            {<ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showBullets={true} showThumbnails={false}  />}
        </div>
    )
}

export default Carrusel;