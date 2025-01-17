import css from './Options.module.css'
const Options = ({
  feedbackFunction,
  resetFunction,
  total
}) => {
    return (
      <div className={css.btnDiv}>
        <button onClick={()=>feedbackFunction('good')} type="button">
          Good
        </button>
        <button onClick={()=>feedbackFunction('neutral')} type="button">
          Neutral
        </button>
        <button onClick={()=>feedbackFunction('bad')} type="button">
          Bad
        </button>
        {total !== 0 && <button onClick={resetFunction} type="button">
          Reset
        </button>}
      </div>
    );
}
export default Options