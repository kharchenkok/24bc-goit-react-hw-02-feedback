import React from 'react';
import PropTypes from 'prop-types'

import style from './Statistics.module.css'

const Statistics = ({options,total, positivePercentage}) => {
    console.log(options);
    console.log(total);
    return (
        <ul className={style.statistic__list}>
        {Object.entries(options).map(option => (
          <li className={style.statistic__item} key={option[0]}>
            <p className={style.statistic__name}>{option[0]}:</p>
            <p className={style.statistic__value}>{option[1]}</p>
          </li>
        ))}
  
        <li className={style.statistic__item}>
          <p className={style.statistic__name}>Total:</p>
          <p className={style.statistic__value}>{total}</p>
        </li>
        <li className={style.statistic__item}>
          <p className={style.statistic__name}>Positive feedback:</p>
          <p className={style.statistic__value}>{positivePercentage}%</p>
        </li> 
      </ul>
    );
};

export default Statistics;


Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    options: PropTypes.object.isRequired,
    positivePercentage:PropTypes.string.isRequired
  };