import { useState } from 'react';
import Button from '../../components/button/button';
import CarPrice from '../../components/carPrice/carPrice';
import FirstPay from '../../components/firstPay/firstPay';
import Term from '../../components/term/term';
import './main.scss';

function Main() {

    const [carPrice, setCarPrice] = useState(3000000);
    const [firstPayPercents, setFirstPayPercents] = useState(35);
    const [term, setTerm] = useState(36);


    let firstPayRubles = Math.round((firstPayPercents / 100) * carPrice);

    let monthPay = Math.round((carPrice - firstPayRubles) * ((0.035 * Math.pow((1 + 0.035),
    term)) / (Math.pow((1 + 0.035), term) - 1)));

    let fullSum = Math.round(firstPayRubles + term * monthPay);



    return (
        <main className="main">
            <h1 className="main__title">
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <form onSubmit={()=>{}}>
            <div className="main__inputs">
                <CarPrice 
                topic = 'Стоимость автомобиля'
                min = {1000000}
                max = {6000000}
                step = {10000}
                setCarPrice = {setCarPrice}
                carPrice = {carPrice}
                // measure = '&#8381;'
                // onChange={'onChangeHandler'}
                />
                <FirstPay 
                topic = 'Первоначальный взнос'
                min = {10}
                max = {60}
                step = {1}
                firstPayRubles={firstPayRubles}
                firstPayPercents={firstPayPercents}
                setFirstPayPercents={setFirstPayPercents}
                />
                <Term 
                topic = 'Срок лизинга'
                min = {1}
                max = {60}
                step = {1}
                term={term}
                setTerm={setTerm}
                // measure = 'мес.'
                />
            </div>
            <div className="main__sum">
                <div className="main__amount-sum">
                    <p className="topic">Сумма договора лизинга</p>
                    <p className="value">{fullSum} &#8381;</p>
                </div>
                <div className="main__amount-sum">
                    <p className="topic">Ежемесячный платеж от</p>
                    <p className="value">{monthPay} &#8381;</p>
                </div>
                <Button />
            </div>
            </form>
        </main>
);
}

export default Main;