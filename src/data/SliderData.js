import Image from '../images/slider-5.jpg';
import PopupOne from '../images/popup-1.png'
import PopupTwo from '../images/popup-2.jpg'
import PopupThree from '../images/popup-3.jpg'

export const SliderData = [
    {
        title: 'Hello, I am Yona',
        description: 'I`m currently participating in Generasi Gigih powered by YABB and Gojek in Front End Engineer Learning Path. This is my week 4 reflection and this reflection is about The Power of Optimism. Because we talk about optimism, I put all of my previous weekly reflection link for you to see. Just slide next!',
        path: 'question-1',
        label: 'Let`s start!',
        image: Image, 
        alt: 'generasi-gigih',
        popup: ''
    },
    {
        title: 'My 1st weekly reflection: Journey starts',
        description: 'In week 1 reflection, I talked about how I managed myself in the first week with Generasi Gigih. It was fun, easy at first, but challenging at the end. I made a infographic about it so if you wanna check out jut clik the button.',
        link: () => window.open('https://drive.google.com/file/d/1RKfBbk-4TPfxqi3drzZwIRA09T_-1dTy/view?usp=sharing'),
        label: 'View my work',
        image: Image, 
        alt: 'generasi-gigih',
        popup: PopupOne
    },
    {
        title: 'My 2nd weekly reflection: Past, Present, and Future!',
        description: 'I made a little milestone here by writing my weekly reflection in my first blog ever. And I`m proudly to present you my blog here:',
        link: () => window.open('https://medium.com/@yohanafransiscasarumpaet/the-past-is-behind-learn-from-it-4aa31fb4f8d3'),
        label: 'View my work!',
        image: Image, 
        alt: 'generasi-gigih',
        popup: PopupTwo
    },
    {
        title: 'My 3rd weekly reflection: Halfway Through',
        description: 'Still talking about my journey in Generasi Gigih, the ups and downs, also I made my reflection with React so I can apply the lesson that I`ve learned.',
        link: () => window.open('https://yonafransisca.github.io/generasi-gigih-week-3-reflection/'),
        label: 'View my work',
        image: Image, 
        alt: 'generasi-gigih',
        popup: PopupThree
    },
];