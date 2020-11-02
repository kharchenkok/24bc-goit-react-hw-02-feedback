import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      countTotalFeedback=()=>{
          const{good,neutral,bad}=this.state
          const totalFeedback = good + neutral + bad;
        return totalFeedback;
      }
    countPositiveFeedbackPercentage=()=>{
        const { good } = this.state;
        const positiveFeedbackPercentage =
            ((good / this.countTotalFeedback()) * 100).toFixed(1);
        return Number(positiveFeedbackPercentage);
    }
    onLeaveFeedback = event => {
        const { name } = event.target;
        console.log(event.target);
        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
        
    };
    render() {
        const{good,neutral,bad}=this.state
        return (
        <>
         <Section title="Please leave feedback">
                <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                <Section title="Statistics">
                <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
                </Section>
        </>
               
            
        );
    }
}

export default App;