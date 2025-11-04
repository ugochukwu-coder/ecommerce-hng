import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import ProductsAccesseries from "./components/ProductsAccesseries";
import AudioGear from "./components/AudioGear";



export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroDetails}>
              <p className={styles.title}>NEW PRODUCT</p>
              <h2 className={styles.productName}>XX99 Mark II Headphones</h2>
              <p className={styles.description}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <Link href="" className="seeProductOrange">
                See Product
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/headphones.png"
              alt="XX99 Mark II Headphones"
              width={500}
              height={500}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <ProductsAccesseries />

      <section className={styles.speakerSection}>
        <div className={styles.speakerContent}>
          <div className={styles.heroSpeaker}>
            <Image
              src="/image-bgspeaker.png"
              alt="Speakers"
              width={500}
              height={500}
              className={styles.speakerImage}
            />
          </div>
          <div className={styles.speakerDetails}>
            <div className={styles.speakerText}>
              <h2 className={styles.speakerHeading}>
                ZX9 <br /> SPEAKER
              </h2>
              <p className={styles.speakerDescription}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="" className="seeProductDark">
                See Product
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.speakerSectionTwo}>
        <div className={styles.speakerSectionWrapper}>
          <div className={styles.speakerStand}>
            <div className={styles.inner}>
              <h3 className={styles.speakerTitle}>ZX7 SPEAKER</h3>
              <Link href="" className="seeProductGray">
                See Product
              </Link>
            </div>
          </div>
          <div className={styles.bluetoothPart}>
            <div className={styles.ImageContainer}>
              <Image
                src="/blutooth.png"
                alt="Speaker"
                width={500}
                height={500}
                className={styles.bluetoothImage}
              />
            </div>
            <div className={styles.standRight}>
              <h3 className={styles.speakerTitle}>YX1 EARPHONES</h3>
              <Link href="" className="seeProductWhite">
                See Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AudioGear />

     
    </>
  );
}
