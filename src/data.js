


//-------------------- How We Work ----------------------
import plan from './img/planning.png';
import date from './img/calendar.png';
import clean from './img/bucket.png';



//-------------------- Modern Card ----------------------
import modernCardImg1 from './img/modern-card-1.png';
import modernCardImg2 from './img/modern-card-2.png';
import modernCardImg3 from './img/modern-card-3.png';


//-------------------- Team Card ----------------------
import cleaner1 from './img/cleaner-1.jpg'
import cleaner2 from './img/cleaner-2.jpg'
import cleaner3 from './img/cleaner-3.jpg'
import cleaner4 from './img/cleaner-4.jpg'


//-------------------- Services ----------------------
import houseCleaning from './img/house-cleaning (1).png';
import kitchenCleaning from './img/kitchen.png';
import carpetCleaning from './img/carpet.png';
import windowCleaning from './img/window-cleaning.png';
import floorCleaning from './img/mop.png';
import bathroomCleaning from './img/sanitary.png';




//=============================== Modern Card ===============================
export const modernCardData = [
    {
        img: modernCardImg1,
        title: 'Modern Equipment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'

    },
    {
        img: modernCardImg2,
        title: 'Expert Cleaners',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'

    },
    {
        img: modernCardImg3,
        title: 'Dedicated Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'

    },
]



//=============================== Services ===============================

export let services;

fetch('https://eco-clean-api.herokuapp.com/service-list')
            .then(response => response.json())
            .then(json => services = json)



// export const services = [
//     {
//         id:1,
//         img: houseCleaning,
//         serciceName: 'House Cleaning',
//         serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.',
//         price: 2000

//     },
//     {
//         id:2,
//         img: kitchenCleaning,
//         serciceName: 'Kitchen Cleaning',
//         serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.',
//         price: 2000

//     },
//     {
//         id:3,
//         img: carpetCleaning,
//         serciceName: 'Carpet Cleaning',
//         serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.',
//         price: 2000

//     },
//     {
//         id:4,
//         img: windowCleaning,
//         serciceName: 'Window Cleaning',
//         serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.',
//         price: 2000

//     },
//     {
//         id:4,
//         img: floorCleaning,
//         serciceName: 'Floor Cleaning',
//         serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.',
//         price: 2000

//     },
//     {
//         id:5,
//         img: bathroomCleaning,
//         serciceName: 'Bathroom Cleaning',
//         serviceDecription: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris amet orci. Aenean dignissim pellentesque.',
//         price: 2000

//     }
// ]








//=============================== How We Work ===============================

export const howWorkData = [
    {
        img: plan,
        title: 'Make A Plan',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'

    },
    {
        img: date,
        title: 'Set a Date',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'

    },
    {
        img: clean,
        title: 'Start Cleaning',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'

    }
]



//=============================== Team ===============================

export const teamCard = [
    {
        img: cleaner1,
        name: 'Abelina Smith',
        designation: 'Project Manager'
    },
    {
        img: cleaner2,
        name: 'Jack Morkel',
        designation: 'Cleaner Head'
    },
    {
        img: cleaner3,
        name: 'Olivia Dee',
        designation: 'Cleaning Staff'
    },
    {
        img: cleaner4,
        name: 'Adam Smith',
        designation: 'Cleaning Staff'
    },
]


export let orderListData;

fetch('https://eco-clean-api.herokuapp.com/order-list')
            .then(response => response.json())
            .then(json => orderListData = json)



// export const orderListData = [
//     {
//         username: 'sakib',
//         email: 'sakib@gmail.com',
//         service: 'Window Cleaning',
//         paywith: 'credit card',
//         status: [
//             {
//                 status: 'done',
//                 value: 1
//             },
//             {
//                 status: 'ongoing',
//                 value: 2
//             },
//             {
//                 status: 'pending',
//                 value: 3
//             },
//         ]
//     },
// ]