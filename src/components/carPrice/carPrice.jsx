import { useState } from 'react';
import './carPrice.scss';

function CarPrice( { topic, min, max, step, measure, onChange, value } ) {

    const [inputValue, setInputValue] = useState('3000000');
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
                    name="input_text" 
                    max={max}
                    min={min}  
                    maxlength="7"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
                <p className='wrapper__descr1'>&#8381;</p>
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

export default CarPrice;
