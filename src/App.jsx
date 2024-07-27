import { useState } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
function App() {
  useState[reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <>
      <Description />
      <Options />
      <Feedback good={reviews.good} neutral={reviews.neutral} bad={reviews.bad} />
    </>
  )
}

export default App
