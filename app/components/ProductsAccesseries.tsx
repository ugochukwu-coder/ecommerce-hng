import styles from "./ProductsAccesseries.module.css";
import Image from "next/image";
import Link from "next/link";

// Array of products
const productsAccesseries = [
  {
    id: 1,
    image: "/image-headphone-small.png",
    title: "Headphones",
    link: "/headphones" // Add proper links
  },
  { 
    id: 2,
    image: "/image-speaker-small.png",
    title: "Speakers",
    link: "/speakers"
  },
  { 
    id: 3,
    image: "/image-xx99-mark-one-headphones.png",
    title: "Earphones",
    link: "/earphones"
  }
];

export default function ProductsAccesseries() {
  return (
    <div className={styles.productsAccesseries}>
      {productsAccesseries.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <div className={styles.productImageContainer}>
            <Image
              src={product.image}
              alt={product.title}
              width={123}
              height={160}
              className={styles.productImage}
            />
          </div>
          <p className={styles.productName}>{product.title}</p>
          <Link href={product.link} className={styles.shopButton}>
            SHOP <span className={styles.arrow}>&gt;</span>
          </Link>
        </div>
      ))}
    </div>
  );
}