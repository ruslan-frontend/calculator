import './firstPay.scss';

function FirstPay( { topic, min, max, step, firstPayPercents, setFirstPayPercents, firstPayRubles } ) {

    const onChangeHandler = (e) => {
        if (e.target.value < 10) {
            setFirstPayPercents(10);
        } else if (e.target.value > 60) {
            setFirstPayPercents(60);
        } 
    };

    return (
        <div className="form">
            <p className="topic">
                {topic}
            </p>
            <div className='wrapper'>
                <div className="wrapper__payment">
                    <input
                        type="text" 
                        class="form__percents" 
                        id="input_text"
                        name="input_text" 
                        max={max}
                        min={min}
                        maxLength='2'
                        value={firstPayPercents}
                        onChange={(e) => setFirstPayPercents(e.target.value)}
                        onBlur={onChangeHandler}
                    />
                    <span className="percent-sign">%</span>
                    <p className="wrapper__amount">{firstPayRubles} &#8381;</p>
                </div>
                <input 
                    type="range" 
                    class="form__range" 
                    id="input_range" 
                    name="input_range" 
                    min={min} 
                    max={max}
                    value={firstPayPercents}
                    step={step}
                    onChange={(e) => setFirstPayPercents(e.target.value)}
                />
            </div>
        </div>
    );
}

export default FirstPay;
