import React from 'react';
import styles from './subscription.module.scss';
const Subscription = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className={['container', styles.subWrap].join(' ')}>
            <p>Subscribe to get updates on exciting offers & deals</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.action}>
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        role="emailField"
                    />
                    <button>Subscribe</button>
                </div>
            </form>
        </div>
    );
};

export default Subscription;
