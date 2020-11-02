
import React, { useState } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

const inatialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const App =()=> {

  const[state,setState]=useState(inatialState)



  const countTotalFeedback = () => {
   
    const totalFeedback = Object.values(state).reduce(
      (acc, el) => acc + el,
      0
    );
    

    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const positiveFeedbackPercentage = (
      (good /countTotalFeedback()) *
      100
    ).toFixed(1);
    return positiveFeedbackPercentage;
  };
  const onLeaveFeedback = (event) => {
    // console.log(event.target);
    const { name } = event.target;
    setState((prevState) => ({...prevState, [name]: prevState[name] + 1 }));
  };
  
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={state}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          
          {countTotalFeedback() > 0 ? (
            <Statistics
              options={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}

          {/* <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> */}
        </Section>
      </>
    );
  
}

export default App;




// import React, { Component } from "react";
// import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
// import Notification from "./notification/Notification";
// import Section from "./section/Section";
// import Statistics from "./statistics/Statistics";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback = () => {
//     //   const{good,neutral,bad}=this.state
//     //   const totalFeedback = good + neutral + bad;
//     const totalFeedback = Object.values(this.state).reduce(
//       (acc, el) => acc + el,
//       0
//     );
//     //   console.log(totalFeedback);

//     return totalFeedback;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const positiveFeedbackPercentage = (
//       (good / this.countTotalFeedback()) *
//       100
//     ).toFixed(1);
//     return positiveFeedbackPercentage;
//   };
//   onLeaveFeedback = (event) => {
//     console.log(event.target);
//     const { name } = event.target;
//     this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
//   };
//   render() {
//     // const{good,neutral,bad}=this.state
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
          
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               options={this.state}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}

//           {/* <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> */}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
