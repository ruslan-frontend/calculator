import Button from '../../components/button/button';
import Form from '../../components/form/form';
import './main.scss';

function Main() {
    return (
        <main className="main">
            <h1 className="main__title">
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <div className="main__inputs">
                <Form 
                topic = 'Стоимость автомобиля'
                min = {1000000}
                max = {6000000}
                value = {3000000}
                step = {10000}
                />
                <Form 
                topic = 'Первоначальный взнос'
                min = {10}
                max = {60}
                value = {20}
                step = {5}
                />
                <Form 
                topic = 'Срок лизинга'
                min = {1}
                max = {60}
                value = {36}
                step = {4}
                />
            </div>
            <div className="main__sum">
                <div className="main__amount-sum">
                    <p className="topic">Сумма договора лизинга</p>
                    <p className="value">4 467 313 &#8381;</p>
                </div>
                <div className="main__amount-sum">
                    <p className="topic">Ежемесячный платеж от</p>
                    <p className="value">114 455 &#8381;</p>
                </div>
                <Button />
            </div>
        </main>
);
}

export default Main;