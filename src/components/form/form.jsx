import './form.scss';

function Form( { topic, min, max, value, step, } ) {
    return (
        <form className="form">
            <p className="topic">
                {topic}
            </p>

            <input 
                type="text" 
                class="form__text" 
                id="input_text" 
                max={max} 
                value={value} 
                />

            <input 
                type="range" 
                class="form__range" 
                id="input_range" 
                min={min} 
                max={max}
                value={value}
                step={step}
                />
        </form>
    );
}

export default Form;



