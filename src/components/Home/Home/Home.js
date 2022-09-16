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
                    <div className={styles.bottomBannerWrapper}>
                        <span className={styles.bottomBannerInputIcon}>
                            <KingBedIcon />
                        </span>
                        <input type="text" className={styles.bottomBannerInput}
                            placeholder='Where are you going?'
                        />
                        <br />
                        <form>
                            <label for="birthday">Check-in</label>
                            <input type="date" id="birthday" name="birthday" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;