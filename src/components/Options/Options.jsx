import css from './Options.module.css'
const Options = ({

}) => {
    return (
      <div className={css.btnDiv}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <button type="button">Reset</button>
      </div>
    );
}
export default Options