import React from 'react'
import styles from './preloader.module.css'

const PreLoader = ({ position = 'fixed' }) => {

    return (
        <div className={`${styles.preloaderArea} ${position == 'absolute' ? styles.absolute : ''}`}>
            <div className={styles.flikrLoaderpinner}>
                <div className={styles.flikrLoader}>
                    <div></div><div></div><div></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader;