import { Clock } from 'iconsax-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const Blog = ({ posts }) => {
  const [itemsShowed, setItemsShowed] = useState(false);

  const ShowAllHandler = () => {
    setItemsShowed((s) => !s);
  };

  return (
    <div className={styles['blog-wrap']}>
      <h3>Aktualności</h3>
      <div className={`${styles.blog} grid`}>
        {!itemsShowed &&
          posts?.slice(0, 1).map((post) => (
            <Link key={post.id} to={`/article/${post.slug}`}>
              <div className={`${styles['post-container']} grid`}>
                <img
                  src={post.photo.url}
                  alt={post.title}
                  width={'100%'}
                  height={'auto'}
                />
                <span>
                  <Clock size={'16'} />
                  {new Date(post.createdAt).toLocaleDateString('pl-PL')}
                </span>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <button>Zobacz więcej...</button>
              </div>
            </Link>
          ))}

        {itemsShowed &&
          posts?.map((post) => (
            <Link key={post.id} to={`/article/${post.slug}`}>
              <div className={`${styles['post-container']} grid`}>
                <img
                  src={post.photo.url}
                  alt={post.title}
                  width={'100%'}
                  height={'auto'}
                />
                <span>
                  <Clock size={'16'} />
                  {new Date(post.createdAt).toLocaleDateString('pl-PL')}
                </span>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <button>Zobacz więcej...</button>
              </div>
            </Link>
          ))}
      </div>
      {posts.length >= 2 && (
        <div className={'grid'}>
          <button
            onClick={ShowAllHandler}
            className={styles['show-more-button']}
          >
            Zobacz
            {!itemsShowed && ' więcej'}
            {itemsShowed && ' mniej'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
