import photo1 from '../assets/transfer.jpg'
import photo1Big from '../assets/transferBig.jpg'
import photo4 from '../assets/delivery.jpg'
import photo4Big from '../assets/deliveryBig.jpg'
import photo2 from '../assets/bizness.jpg'
import photo2Big from '../assets/biznessBig.jpg'
import photo3 from '../assets/soberDriver.jpg'
import photo3Big from '../assets/soberDriverBig.jpg'
import transfer from '../assets/transfer.svg'
import delivery from '../assets/box.svg'
import bizness from '../assets/bizness.svg'
import driver from '../assets/driver.svg'

export const  content = [
    {   id: 1,
        title: "Трансфер из аэропорта и ж/д вокзала",
        image: photo1,
        imageBig: photo1Big,
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
        imageBig: photo2Big,
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
        imageBig: photo3Big,
        subTitle: 'трезвый водитель',
        svg: driver,
    },
    {   id: 4,
        title: "Курьерская доставка",
        image: photo4,
        imageBig: photo4Big,
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