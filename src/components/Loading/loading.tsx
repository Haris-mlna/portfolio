import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loadingPages}>
      <div className={styles.spinnerContainer}>
        <div className={styles.layer}>
        </div>
        <div className={styles.spinner}>
        
        </div>
      </div>
    </div>
  );
};

export default Loading;
