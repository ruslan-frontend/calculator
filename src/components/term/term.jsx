import './term.scss';

function Term( { topic, min, max, step, term, setTerm } ) {
    
    const onChangeHandler = (e) => {
        if (e.target.value < 1) {
            setTerm(1);
        } else if (e.target.value > 60) {
            setTerm(60);
        } else {
            setTerm(e.target.value);
        }
    };

    return (
        <div className="form">
            <p className="topic">
                {topic}
            </p>
            <div className='wrapper'>
                <input
                    type="number" 
                    class="form__text" 
                    id="input_text"
                    max={max}
                    min={min}  
                    maxlength="2"
                    value={term}
                    onChange={onChangeHandler}
                />
                <p className='wrapper__descr3'>мес.</p>
            </div>
            <input 
                type="range" 
                class="form__range" 
                id="input_range" 
                min={min} 
                max={max}
                step={step}
                value={term}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default Term;
