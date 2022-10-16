import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Stáhnout zdrojový kód</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Získej zdrojový kód na Github</p>
        </div>
        <a href="https://github.com/eldiabloodjr23/NftMarket" target="_blank" rel="noreferrer">
        <button className={styles.btnPrimary}>Zdrojový kód</button>
        </a>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download