import { Clock } from 'iconsax-react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const Blog = ({ posts }) => {
  return (
    <div className={styles['blog-wrap']}>
      <h3>Aktualności</h3>
      <div className={`${styles.blog} grid`}>
        {posts?.map((post) => (
          <Link key={post.id} to={`/article/${post.slug}`}>
            <div className={`${styles['post-container']} grid`}>
              <img src={post.photo.url} alt={post.title}/>
              <span>
                <Clock size={'16'}/>
                {new Date(post.createdAt).toLocaleDateString('pl-PL')}
              </span>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <button>Zobacz więcej...</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
