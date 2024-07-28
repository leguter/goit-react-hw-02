import { useState } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const updateFeedback = (feedbackType) => {
    setReviews((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    // const cheakStats = () => {
    //   if (totalFeedback === 0) {
    //     <Notification />
    //   } else {
    //     <Feedback
    //       good={reviews.good}
    //       neutral={reviews.neutral}
    //       bad={reviews.bad}
    //     />;
    //   }
    // }
  };
  return (
    <>
      <Description />
      <Options feedbackFunction={updateFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
        />}
    </>
  );
}
export default App
