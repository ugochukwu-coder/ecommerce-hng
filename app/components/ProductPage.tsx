import styles from "./ProductPage.module.css";
import Image from 'next/image';
import Link from "next/link";

interface Product {
  imageSrc: string;
  altText: string;
  isNewProduct?: boolean;
  productName: string;
  productType: string;
  description: string;
  price?: number;
  quantity?: number;
  productLink?: string;
  onAddToCart?: () => void;
  layout?: 'left' | 'right';
  className?: string;
  variant?: 'default' | 'cart';
}

export default function ProductSection({
  imageSrc,
  altText,
  isNewProduct = false,
  productName,
  productType,
  description,
  price,
  quantity,
  productLink,
  onAddToCart,
  layout = 'left',
  className = "",
  variant = 'default'
}: Product) {
  const containerClass = layout === 'right' ? styles.containerTwo : styles.containerOne;

  return (
    <section className={`${styles.wrapper} ${className}`}>
      <div className={containerClass}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={altText}
            width={500}
            height={500}
            className={styles.img}
          />
        </div>
        <div className={styles.productDetails}>
          {isNewProduct && <p className={styles.newProduct}>NEW PRODUCT</p>}
          <h3 className={styles.productHeading}>
            {productName}<br/>{productType}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
          
          {/* Price and Quantity Section - Only show if price or quantity exists */}
          {(price !== undefined || quantity !== undefined) && (
            <div className={styles.priceQuantity}>
              {price !== undefined && (
                <p className={styles.price}>${price.toFixed(2)}</p>
              )}
              
              {quantity !== undefined && (
                <div className={styles.buttonGroup}>
                  <span className={styles.quantity}>{quantity}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Button/Link Section - Always show if productLink or onAddToCart exists */}
          <div className={styles.buttonGroup}>
            {variant === 'cart' && onAddToCart ? (
              <button 
                onClick={onAddToCart} 
                className="seeProductOrange"
              >
                Add to Cart
              </button>
            ) : (
              productLink && (
                <Link href={productLink} className="seeProductOrange">
                  See Product
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}