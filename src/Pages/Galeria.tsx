import React, { useEffect, useState } from 'react';
import MasonryLayout from '../components/Elements/MansoryLayout/MasonryLayout.tsx';
import { GALLERY_POSTS, graphcms } from '../components/Graphql/Queries';
import styles from './Galeria.module.css';

interface Article {
  id: number;
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

const Galeria: React.FC = () => {
  const [galleryPosts, setGalleryPosts] = useState<Article[]>([]);

  useEffect(() => {
    graphcms
      .request<ApiResponse>(GALLERY_POSTS)
      .then((res) => 
      setGalleryPosts(res.galeriaPosts)
      );
  }, []);

  return (
    <div className={styles.galeria}>
      <div className={`${styles['galeria-text']} center`}>
        <h1> Europa Oczami naszych kierowców</h1>
        <h2>
          Trasy europejskie: Piękne widoki i niezapomniane momenty, obserwowane
          z perspektywy naszych profesjonalistów.
        </h2>
      </div>
      <MasonryLayout galleryPosts={galleryPosts} />
    </div>
  );
};

export default Galeria;
