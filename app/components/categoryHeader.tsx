import styles from "../components/categoryHeader.module.css";

interface CategoryHeaderProps {
  categoryName: string;
   className?: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryName }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headphones}>
        <h3 className={styles.heading}>{categoryName}</h3>
      </div>
    </header>
  );
};

export default CategoryHeader;
