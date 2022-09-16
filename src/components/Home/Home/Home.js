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
import Featured from '../../Featured/Featured';

const Home = () => {
    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <>
            <div>
                <div className={styles.home}>
                    <div className={styles.homeWrapper}>
                        <div className={styles.upperBanner}>
                            <h1 className={styles.animatedBannerText}><MovingComponent
                                type="typewriter"
                                dataText={[
                                    'Find your next stay',
                                    'Search Hotels'
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
                                <span onClick={() => setOpenOptions(!openOptions)} className={styles.bottomBannerInputText}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                                {openOptions && <div className={styles.options}>
                                    <div className={styles.optionItem}>
                                        <span className={styles.optionText}>Adult</span>

                                        <button disabled={options.adult <= 1}
                                            onClick={() => handleOption('adult', 'd')}
                                            className={styles.optionCounterButton}>-</button>
                                        <span className={styles.optionCounterNumber}>{options.adult}</span>
                                        <button onClick={() => handleOption('adult', 'i')} className={styles.optionCounterButton}>+</button>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <span className={styles.optionText}>Children</span>
                                        <button disabled={options.children <= 0} onClick={() => handleOption('children', 'd')} className={styles.optionCounterButton}>-</button>
                                        <span className={styles.optionCounterNumber}>{options.children}</span>
                                        <button onClick={() => handleOption('children', 'i')} className={styles.optionCounterButton}>+</button>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <span className={styles.optionText}>Room</span>
                                        <button disabled={options.room <= 1} onClick={() => handleOption('room', 'd')} className={styles.optionCounterButton}>-</button>
                                        <span className={styles.optionCounterNumber}>{options.room}</span>
                                        <button onClick={() => handleOption('room', 'i')} className={styles.optionCounterButton}>+</button>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.listContainer}>
                    <Featured />
                    <Featured />
                </div>
            </div>
        </>
    );
};

export default Home;