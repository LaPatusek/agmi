import React from 'react';
import Masonry from 'react-masonry-css';
import images from '../../../json/images.json';
import styles from './MasonryLayout.module.css';

const MasonryLayout = () => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1,
  };

  const renderedImages = images.images.map((image) => {
    return (
      <div id={image.id} key={image.id + image.kierowca} className={`${styles.image} relative`}>
        <img src={image.src} width='100%' height={'100%'} alt={image.id} />
        <div className={styles['image-text']}>
          <div className={styles['text-wrap']}>
            <h2>{image.kierowca}</h2>
            <h3>{image.miejsce}</h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={`${styles.gallery} grid`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles['my-masonry-grid']}
        columnClassName={styles['my-masonry-grid_column']}
      >
        {renderedImages}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
