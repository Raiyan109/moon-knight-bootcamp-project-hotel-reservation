import React, { useState } from 'react';
import styles from './Home.module.css'
import MovingComponent from 'react-moving-text'
import KingBedIcon from '@mui/icons-material/KingBed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { DateRange } from 'react-date-range';

const Home = () => {
    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

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
                        {/* <form>
                            <label for="birthday">Check-in</label>
                            <input type="date" id="birthday" name="birthday" />
                        </form> */}
                        <span className={styles.bottomBannerInputIcon}>
                            <CalendarMonthIcon />
                        </span>
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className={styles.bottomBannerInputText}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={styles.date}
                        />}
                        <br />

                        <span className={styles.bottomBannerInputIcon}>
                            <PersonIcon />
                        </span>
                        <span className={styles.bottomBannerInputText}>2 adults 2 children 1 room</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;