/*import photo1 from '../../../../assets/img/phot01.jpg'
import photo2 from '../../../../assets/img/phot02.jpg'
import photo3 from '../../../../assets/img/phot03.jpg'
import photo4 from '../../../../assets/img/phot04.jpg'
import photo5 from '../../../../assets/img/phot05.jpg'
import photo6 from '../../../../assets/img/phot06.jpg'*/

import photo1 from '../assets/transfer.jpg'
import photo4 from '../assets/delivery.jpg'
import photo2 from '../assets/bizness.jpg'
import photo3 from '../assets/soberDriver.jpg'
import transfer from '../assets/transfer.svg'
import delivery from '../assets/box.svg'
import bizness from '../assets/bizness.svg'
import driver from '../assets/driver.svg'

export const  content = [
    {   id: 1,
        title: "Трансфер из аэропорта и ж/д вокзала",
        image: photo1,
        services: [
            'ожидание в аэропорту до 60 мин',
            'ожидание на Ж/Д вокзале до 30 минут',
            'встреча с табличкой',
            'помощь в переносе багажа',
            'доставка в любую точку Нижнего Новгорода'
        ],
        description: 'стоимость услуги - 1300 руб., детали уточните у оператора.',

        subTitle: 'трансфер',
        svg: transfer,
    },

    {   id: 2,
        title: "Бизнесс-класс для людей",
        services: [
            'статусные автомобили бизнес-класса лишенные внешних атрибутов такси',
            'вежливые и культурные водители с лицензией на право перевозки пассажиров',
            'прохладительные напитки, Wi-Fi и музыка в соответствии с Вашими предпочтениями',
            'наличный и безналичный расчет'
        ],
        image: photo2,
        subTitle: 'бизнесс-класс',
        svg: bizness,
    },
    {   id: 3,
        title: "Трезвый водитель",
        services: [
            'трезвый и опытный водитель доставит вас домой на вашем же автомобиле',
            'вам не придётся переживать по поводу сохранности транспортного средства, оставленного вами без присмотра',
            'услугой можно воспользоваться при обстоятельствах, когда вы не имеете возможности использовать свой автомобиль самостоятельно',
            'услуга предоставляется и в случае ограниченной страховки'
        ],
        image: photo3,
        subTitle: 'трезвый водитель',
        svg: driver,
    },
    {   id: 4,
        title: "Курьерская доставка",
        image: photo4,
        services: [
            'быстрее и надежнее, чем экспресс-почтой',
            'гарантия сохранности груза',
            'индивидуальные услуги по доставке',
            'услуга является отличной возможностью сделать подарок-сюрприз',
            'междугородняя и межобластная доставка',

        ],
        subTitle: 'курерская доставка',
        svg: delivery,
    },


]