import { useState } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
function App() {
  const [reviews, setReviews] = useState(() => {
    const getReviews = window.localStorage.getItem("reviews");
    if (getReviews) {
      return JSON.parse(getReviews);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);
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
  const resetReviews = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
    })
    // useState(() => {
    //   const getReviews = window.localStorage.getItem("reviews")
    //     if (getReviews) {
    //       return JSON.parse(getReviews);
    //     }
    //     return {
    //       good: 0,
    //       neutral: 0,
    //       bad: 0,
    //     };
    //  })
  }
  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  return (
    <>
      <Description />
      <Options feedbackFunction={updateFeedback} resetFunction={resetReviews} total={totalFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
        bad={reviews.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
        
        />}
    </>
  );
}
export default App
