import Image from 'next/image';
import styles from './AudioGear.module.css';

export default function AudioGear() {
  return (
    <>
      <section className={styles.audioGearSection}>
        <div className={styles.audioGearContainer}>
          <div className={styles.audioGearContent}>
            <h2 className={styles.audioGearHeading}>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
            <p className={styles.audioGearDescription}>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <Image
          src="/Bitmap.png"
          alt="Audio Gear"
          width={540}
          height={588}
          className={styles.audioGearImage}
          />
        </div>
      </section>
    </>
  )
}         