const Feedback = ({
    good,
    neutral,
    bad,
}) => {
    
    return (

        <div>
            <ul>
                <li>
                    <p>good: {good}</p>
                </li>
                <li>
                    <p>neutral: {neutral}</p>  
                </li>
                <li>
                    <p>bad: {bad}</p>
                </li>
            </ul>
        </div>
    )
}
export default Feedback