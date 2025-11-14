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
    <>
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
          
          {/* Price Section */}
          {price !== undefined && (
            <div className={styles.priceQuantity}>
              <p className={styles.price}>${price.toFixed(2)}</p>
            </div>
          )}
          
          {/* Button/Link Section with Quantity */}
          <div className={styles.buttonGroup}>
            {variant === 'cart' ? (
              <div className={styles.quantityButtonRow}>
                <p className={styles.quantity}>{quantity}</p>
                <button 
                  onClick={onAddToCart} 
                  className="seeProductOrange"
                >
                  Add to Cart
                </button>
              </div>
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


      <div className={styles.cartContainer}>
        <div className={styles.heading}>
          <h3 className={styles.cartHeading}>CART <span className={styles.headingSpan}>1</span></h3>
          <button className={styles.remove}>remove all</button>
        </div>
        <div className={styles.cartHolder}>
          <div className={styles.cartWrapper}>
            <div className={styles.imgCont}>
              <Image
                src="/markI.png"
                alt="XX99 SPEAKER"
                width={300}
                height={300}
                className={styles.cartImage}
              />
            </div>
            <div className={styles.cartTitleWrap}>
              <p className={styles.cartTitle}>XX99 MARK II</p>
              <p className={styles.cartPrice}>$2,222</p>
            </div>
          </div>
          <div className={styles.cartButton}>
            <button className="cartMinus">-</button>
            <span className="cartQuantity">1</span>
            <button className="cartPlus">+</button>
          </div>
        </div>

           <div className={styles.cartHolder}>
          <div className={styles.cartWrapper}>
            <div className={styles.imgCont}>
              <Image
                src="/markI.png"
                alt="XX99 SPEAKER"
                width={300}
                height={300}
                className={styles.cartImage}
              />
            </div>
            <div className={styles.cartTitleWrap}>
              <p className={styles.cartTitle}>XX99 MARK II</p>
              <p className={styles.cartPrice}>$2,222</p>
            </div>
          </div>
          <div className={styles.cartButton}>
            <button className="cartMinus">-</button>
            <span className="cartQuantity">1</span>
            <button className="cartPlus">+</button>
          </div>
        </div>

        <div className={styles.totalUnit}>
          <p className={styles.total}>TOTAL</p>
          <p className={styles.totalPrice}>$2,222</p>
        </div>
        <button className={styles.btn}>CHECKOUT</button>
      </div>
      
    </section>
  
    </>
  );
}