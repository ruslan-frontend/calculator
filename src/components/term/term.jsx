import { useState } from 'react';
import './term.scss';

function Term( { topic, min, max, step, measure } ) {
    
    const [inputValue, setInputValue] = useState('24');
    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form className="form">
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
                    value={inputValue}
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
                value={inputValue}
                onChange={onChangeHandler}
            />
        </form>
    );
}

export default Term;
