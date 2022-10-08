import styles from './Footer.module.scss'

const date = new Date();
const year = date.getFullYear();

export const Footer = () => {
  return <div className={styles.footer}>&copy; {year} All Rights Reserved</div>;
}
