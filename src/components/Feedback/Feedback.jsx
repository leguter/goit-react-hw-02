import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <p>good: {good}</p>
        </li>
        <li>
          <p>neutral: {neutral}</p>
        </li>
        <li>
          <p>bad: {bad}</p>
        </li>
        <li>
          <p>Total: {totalFeedback}</p>
        </li>
        <li>
          <p>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};
export default Feedback;
