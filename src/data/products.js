
import Bata from '../components/pics/bata.jpg';
import Corazones from '../components/pics/corazones.jpeg'
import Lirio from '../components/pics/lirio.jpeg'
export  const  Products = [
    {
        id: 'lirio',
        category_id: 1,
        description: 'Pijama ideal para los dias calurosos',
        image: {Lirio},
        name: 'Pijama Lirio',
        price: 9000,
        stock: 20,
    },
    {
        id: 'bata',
        category_id: 2,
        description: 'Comodo y sencillo ideal para descansar',
        image: {Bata},
        name: 'Pijama Bata',
        price: 8500,
        stock: 5,
    },
    {
        id: 'corazones',
        category_id: 3,
        description: 'Pijama ideal para los dias de lluvia',
        image: {Corazones},
        name: 'Pijama Corazones',
        price: 9200,
        stock: 50,
    },
]