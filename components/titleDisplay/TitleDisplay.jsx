import React from 'react';
import styles from './titleDisplay.module.scss';
const TitleDisplay = ({ title }) => {
    return (
        <div className={styles.namingTitle}>
            <span> {title} </span>
        </div>
    );
};

export default TitleDisplay;
