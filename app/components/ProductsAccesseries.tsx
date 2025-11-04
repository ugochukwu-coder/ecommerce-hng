import styles from "./ProductsAccesseries.module.css"; // This should work since the file exists
import Image from "next/image";
import Link from "next/link";

// Array of products
const productsAccesseries = [
  {
    id: 1,
    image: "/image-headphone-small.png",
    title: "Headphones"
  },
  { id: 2,
    image: "/image-speaker-small.png", // Fixed missing slash
    title: "Speakers"
  },
  { id:3,
    image: "/image-xx99-mark-one-headphones.png",
    title: "Earphones"
  }
]

export default function ProductsAccesseries() {
  return (
    <div className={styles.productsAccesseries}>
      {productsAccesseries.map((product, index) => (
        <div key={index} className={styles.productItem}>
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
          <Link href="" className={styles.shopButton}>
            SHOP <span className={styles.arrow}>&gt;</span>
          </Link>
        </div>
      ))}
    </div>
  )
}