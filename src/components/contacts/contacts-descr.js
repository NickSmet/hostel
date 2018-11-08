import React from 'react';

const Description = ({ lang, language }) => {
    return (
        <div className='contacts-descr'>
            <h2>{ lang.map }</h2>
            {
                language === 'ru' ?
                (
                    <div>
                        <div>
                            <p>
                                <span>Наш точный адрес: </span>
                                г. Москва, Петровские линии, д. 1, кв. 34 
                                (зеленая дверь c нашим логотипом напротив 
                                гостиницы “Будапешт”, 3 этаж).
                            </p>
                            <p>
                                Нажмите на домофоне кнопку рядом с нашим названием, 
                                чтобы Вам открыли или наберите код <span>1861</span>.
                            </p>
                            <p>
                                Хостел находится между 3 и 4 этажом, гостиница – на 5м, 
                                мансардном. В лифте нажимайте на кнопку “4”.
                            </p>
                            <p>
                                Если Вы забронировали номер в гостинице, пожалуйста предварительно 
                                сообщите о приезде администратору по телефону, либо используя кнопку 
                                с подписью “Centeral Hotel&Hostel”. 
                                Мы поможем доставить Ваш багаж в гостиницу.
                            </p>
                        </div>
                        <div>
                            <h3>При заезде необходимо иметь:</h3>
                            <p>※Паспорт</p>
                            <p>※Сумму для оплаты брони в полном размере (наличные или карта).</p>
                        </div>
                    </div>
                )
                :
                (
                    <div>
                        <div>
                            <p>
                                <span>Address: </span>
                                Moscow, Petrovskyje linii str., bld. 1 / г. Москва, Петровские линии, д. 1, кв. 34
                            </p>
                            <p>
                                There is a green door right in front of a hotel Budapest (Будапешт), 
                                it has our logo on it. We are situated between 3 and 4 floors.
                            </p>
                            <p>
                                Please press the button saying “Centeral Hotel&Hostel” 
                                and wait for us to open the door for you or put in the code: <span>1861</span>.
                            </p>
                            <p>
                                <span>Please note: </span>
                                In case you need Russian visa, we can provide you with an invitation letter, 
                                you just need to fill out a <span><a href='/#/visa'> form on our website </a></span> 
                                 (it costs 2000 rub per person).
                            </p>
                        </div>
                        <div>
                            <h3>To check in you need the following: </h3>
                            <p>※Passport with Russian visa (if you need one) and migration card.</p>
                            <p>※Booking cost in rubles (cash or card).</p>
                        </div>
                    </div>
                )
            }
            
        </div>
    );
}

export default Description;