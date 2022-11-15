import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Loader = () => {
  const loading = useSelector((state) => state.loading)
  return loading ? (
    <div className={styles.loadingContainer}>
      <div className={styles.loader} />
    </div>
  ) : null
}

export default Loader
