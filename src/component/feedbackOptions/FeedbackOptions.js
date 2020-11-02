import React from 'react';
import Button from '@material-ui/core/Button';

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    console.log(options);
    return (
        <div>
            <Button variant="contained" color="primary" onClick={onLeaveFeedback}>
  Primary
</Button>
        </div>
    );
};

export default FeedbackOptions;