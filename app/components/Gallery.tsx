import styles from "./Gallery.module.css";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}

interface GalleryProps {
  smallImages: GalleryImage[];
  largeImage: GalleryImage;
  className?: string;
  layout?: 'left' | 'right';
}

export default function Gallery({ 
  smallImages, 
  largeImage, 
  className = "",
  layout = 'left' 
}: GalleryProps) {
  return (
    <section className={`${styles.container} ${className}`}>
      <div className={`${styles.imageContainer} ${layout === 'right' ? styles.reverse : ''}`}>
        <div className={styles.gallery}>
          {smallImages.map((image, index) => (
            <div key={index} className={styles.smallImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={image.className || styles.imageSm}
              />
            </div>
          ))}
        </div>
        
        <div className={styles.largeImageWrapper}>
          <Image
            src={largeImage.src}
            alt={largeImage.alt}
            fill
            className={largeImage.className || styles.imageBg}
          />
        </div>
      </div>
    </section>
  );
}