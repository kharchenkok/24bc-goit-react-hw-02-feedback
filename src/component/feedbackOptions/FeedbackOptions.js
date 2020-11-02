import React from 'react';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    // console.log('options',options);
    // console.log(Object.entries(options).map(option=>option));
    return (
        <div className={style.button_wrapper}>
            {Object.entries(options).map(option=>(

            <button key={option[0]} type='button' onClick={onLeaveFeedback} name={option[0]}
            value={option[1]} className={style.button}>
  {option[0]}
</button>
            ))}
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes={
    options:PropTypes.object.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired

}