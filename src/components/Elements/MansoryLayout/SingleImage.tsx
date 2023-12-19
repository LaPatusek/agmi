import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GALLERY_ONE_POSTS, graphcms } from '../../Graphql/Queries';
import styles from './SingleImage.module.css';

interface Article {
  slug: string;
  imie: string;
  lokalizacja: string;
  zdjecie: {
    url: string;
  };
}

interface ApiResponse {
  galeriaPosts: Article[];
}

const SingleImage: React.FC = () => {
  const { slug } = useParams();
  const [GalleyPosts, setGalleryPosts] = useState<Article[]>([]);

  useEffect(() => {
    graphcms
      .request<ApiResponse>(GALLERY_ONE_POSTS, { slug })
      .then((res) => setGalleryPosts(res.galeriaPosts));
  }, [slug]);

  return (
    <Fragment>
      {GalleyPosts.map((singlePost) => {
        return (
          <div key={singlePost.slug} className={`${styles.image} relative`}>
            <img
              src={singlePost.zdjecie.url}
              alt={singlePost.lokalizacja}
              height={'100%'}
              width={'auto'}
            />
            <div className={styles.text}>
              <h2>{singlePost.imie}</h2>
              <h3>{singlePost.lokalizacja}</h3>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default SingleImage;
