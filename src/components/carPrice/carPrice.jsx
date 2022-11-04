import './carPrice.scss';

function CarPrice( { topic, min, max, step, carPrice, setCarPrice } ) {

        const onChangeHandler = (e) => {
            if (e.target.value < 1000000) {
                setCarPrice(1000000);
            } else if (e.target.value > 6000000) {
                setCarPrice(6000000);
            } else {
                setCarPrice(e.target.value);
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
                    name="input_text" 
                    max={max}
                    min={min}  
                    maxlength="7"
                    value={carPrice}
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
                value={carPrice}
                step={step}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default CarPrice;
