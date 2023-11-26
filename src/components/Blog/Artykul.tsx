import { Clock } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_ONE_POSTS, graphcms } from '../Graphql/Queries';
import styles from './Artykul.module.css';

interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  createdAt: number;
  photo: {
    url: string;
  };
  content: {
    html: string;
  };
}

interface ApiResponse {
  posts: Article[];
}

const Artykul: React.FC = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    graphcms
      .request<ApiResponse>(QUERY_ONE_POSTS, { slug })
      .then((res) => setPosts(res.posts));
  }, [slug]);

  return (
    <div className={styles['article-wrap']}>
      {posts.map((post: Article) => (
        <article key={post.slug} className={`${styles['article']} grid`}>
          <span>
            <Clock size={'18'} />
            {new Date(post.createdAt).toLocaleDateString('pl-PL')}
          </span>
          <h2>{post.title}</h2>
          <div className={styles['image-wrap']}>
            <img src={post.photo.url} alt={post.title} />
          </div>
          <p className={styles.description}>{post.description}</p>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </article>
      ))}
    </div>
  );
};

export default Artykul;
