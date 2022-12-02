
import Bata from '../components/pics/bata.jpg';
import Corazones from '../components/pics/corazones.jpeg'
import Lirio from '../components/pics/lirio.jpeg'
export  const  Products = [
    {
        id: 1,
        category_id: 1,
        description: 'Pijama ideal para los dias calurosos',
        image: {Lirio},
        name: 'Pijama Lirio',
        price: 9000,
        sotck: 20,
    },
    {
        id: 2,
        category_id: 2,
        description: 'Comodo y sencillo ideal para descansar',
        image: {Bata},
        name: 'Pijama Bata',
        price: 8500,
        sotck: 5,
    },
    {
        id: 3,
        category_id: 3,
        description: 'Pijama ideal para los dias de lluvia',
        image: {Corazones},
        name: 'Pijama Corazones',
        price: 9200,
        sotck: 50,
    },
]