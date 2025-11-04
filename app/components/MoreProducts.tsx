import Link from "next/link";
import styles from "./MoreProducts.module.css";
import Image from "next/image";

interface Product {
  id: string;
  imageSrc: string;
  altText: string;
  name: string;
  productLink: string;
  imageClassName?: string;
}

interface MoreProductsProps {
  title?: string;
  products: Product[];
  className?: string;
}

export default function MoreProducts({
  title = "YOU MAY ALSO LIKE",
  products,
  className = "",
}: MoreProductsProps) {
  return (
    <section className={`${styles.moreProducts} ${className}`}>
      <div className={styles.products}>
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.imageContainer}>
          {products.map((product) => (
            <div key={product.id} className={styles.imageWrapper}>
              <div className={styles.subWrapper}>
                <Image
                  src={product.imageSrc}
                  alt={product.altText}
                  width={500}
                  height={500}
                  className={product.imageClassName || styles.imageDefault}
                />
              </div>
              <p className={styles.title}>{product.name}</p>
              <Link
                href={product.productLink}
                className={styles.seeProductOrange}
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
