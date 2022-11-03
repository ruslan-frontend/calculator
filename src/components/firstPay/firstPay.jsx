import { useState } from 'react';
import './firstPay.scss';

function FirstPay( { topic, min, max, step } ) {

    const [inputValue, setInputValue] = useState('20');
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
                    type="text" 
                    class="form__percents" 
                    id="input_text"
                    name="input_text" 
                    max={max}
                    min={min}
                    maxlength="2"
                    value={inputValue}  
                    onChange={onChangeHandler}
                />
                <span className="wrapper__percent">%</span>
                <p className='wrapper__descr2'>200 000 &#8381;</p>
            </div>
            <input 
                type="range" 
                class="form__range" 
                id="input_range" 
                name="input_range" 
                min={min} 
                max={max}
                value={inputValue}
                step={step}
                onChange={onChangeHandler}
            />
        </form>
    );
}

export default FirstPay;
