import { useMemo, useState } from 'react';
import Button from '../../components/button/button';
import CarPrice from '../../components/carPrice/carPrice';
import FirstPay from '../../components/firstPay/firstPay';
import Term from '../../components/term/term';
import React from 'react';
import './main.scss';

function Main() {

    const [carPrice, setCarPrice] = useState(3000000);
    const [firstPayPercents, setFirstPayPercents] = useState(35);
    const [term, setTerm] = useState(36);

    // document.querySelector('.form').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log('hello');
    // });
    
    let firstPayRubles = useMemo(() => {
        return Math.round((firstPayPercents / 100) * carPrice);
    }, [firstPayPercents, carPrice]); 

    let monthPay = useMemo(() => {
        return Math.round((carPrice - firstPayRubles) * ((0.035 * Math.pow((1 + 0.035),
    term)) / (Math.pow((1 + 0.035), term) - 1)));
    }, [carPrice, firstPayRubles, term]); 

    let fullSum = useMemo(() => {
        return Math.round(firstPayRubles + term * monthPay);
    }, [firstPayRubles, term, monthPay]); 

    return (
        <main className="main">
            <h1 className="main__title">
                Рассчитайте стоимость автомобиля в лизинг
            </h1>

            <form onSubmit={(e)=>{
                e.preventDefault();
                const data = {
                    price: carPrice,
                    firstPay: firstPayRubles,
                    term: term,
                    totalPrice: fullSum,
                    monthPay: monthPay
                }
                console.log(data);

            }} 

                className='form'>
            <div className="main__inputs">
                <CarPrice 
                topic = 'Стоимость автомобиля'
                min = {1000000}
                max = {6000000}
                step = {1000}
                setCarPrice = {setCarPrice}
                carPrice = {carPrice}
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
