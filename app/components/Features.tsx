import styles from "./Features.module.css";

interface FeatureItem {
  quantity: string;
  item: string;
}

interface FeaturesProps {
  featuresTitle?: string;
  featuresDescription: string[];
  boxTitle?: string;
  boxItems: FeatureItem[];
  className?: string;
}

export default function Features({
  featuresTitle = "FEATURES",
  featuresDescription,
  boxTitle = "IN THE BOX",
  boxItems,
  className = ""
}: FeaturesProps) {
  return (
    <article className={`${styles.container} ${className}`}>
      <div className={styles.wrapper}>
        <div className={styles.paragraph}>
          <h3 className={styles.featuresHeading}>{featuresTitle}</h3>
          {featuresDescription.map((paragraph, index) => (
            <p key={index} className={index === 0 ? styles.featurePh : styles.featureP}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.box}>
          <h3 className={styles.boxHeading}>{boxTitle}</h3>
          <ul className={styles.links}>
            {boxItems.map((item, index) => (
              <li key={index} className={styles.featuresLink}>
                <span>{item.quantity}</span> {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}