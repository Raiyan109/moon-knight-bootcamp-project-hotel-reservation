import React from 'react';
import styles from './Home.module.css'
import MovingComponent from 'react-moving-text'
import KingBedIcon from '@mui/icons-material/KingBed';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.homeWrapper}>
                <div className={styles.upperBanner}>
                    <h1 className={styles.animatedBannerText}><MovingComponent
                        type="typewriter"
                        dataText={[
                            'Find your next stay',
                            'Search  hotels'
                        ]} /></h1>
                </div>

                <div className={styles.bottomBanner}>
                    <div className={styles.bottomBannerInputWrapper}>
                        <span className={styles.bottomBannerInputIcon}>
                            <KingBedIcon />
                        </span>
                        <input type="text" className={styles.bottomBannerInput}
                            placeholder='Where are you going?'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;