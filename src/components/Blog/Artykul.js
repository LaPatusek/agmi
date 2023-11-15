import { Clock } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tempImg from '../../assets/zdj3.jpg';
import { QUERY_ONE_POSTS, graphcms } from '../Graphql/Queries';
import styles from './Artykul.module.css';

const Artykul = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_ONE_POSTS, { slug })
      .then((res) => setPosts(res.posts));
  }, [slug]);

  return (
    <div className={styles['article-wrap']}>
      {posts.map((post) => (
        <article key={post.slug} className={`${styles['article']} grid`}>
          <span>
            <Clock size={'18'} />
            {new Date(post.createdAt).toLocaleDateString('pl-PL')}
          </span>
          <h2>{post.title}</h2>
          <div className={styles['image-wrap']}>
            <img src={tempImg} alt='' />
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
