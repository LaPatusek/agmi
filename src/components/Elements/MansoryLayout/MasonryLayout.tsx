import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import styles from './MasonryLayout.module.css';

interface galleryPost {
  slug: string;
  imie: string;
  lokalizacja: string;
  zdjecie: {
    url: string;
  };
}

interface MasonryLayoutProps {
  galleryPosts: galleryPost[];
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ galleryPosts }) => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1,
  };

  const renderedImages = galleryPosts?.map((post: galleryPost) => (
    <div className={`${styles.image} relative`} key={post.slug}>
      <Link to={`/galeria/${post.slug}`}>
        <img
          src={post.zdjecie.url}
          alt={post.lokalizacja}
          width={'100%'}
          height={'100%'}
        />
        <div className={styles['image-text']}>
          <div className={styles['text-wrap']}>
            <h2>{post.imie}</h2>
            <h3>{post.lokalizacja}</h3>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className={`${styles.gallery} grid`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={`${styles['my-masonry-grid']} flex`}
        columnClassName={styles['my-masonry-grid_column']}
      >
        {renderedImages}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
