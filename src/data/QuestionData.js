import ImageOne from '../images/question-1.jpg'
import ImageTwo from '../images/question-2.jpg'
import ImageThree from '../images/question-3.jpg'

export const QuestionOne = {
    id: 'question-1',
    heading: 'Question 1',
    question: 'How do you feel about your score so far? What does the score tell you about yourself? Do you think your position will change at the end of the program? Do you believe that you can make it to the next level?',
    answer: 'Honestly, my score didn`t satisfy me at first, I know that i have used all my strength and ability to catch up with the lesson for this past 4 weeks. But then I realized, I wasn`t competing with my friends, eventhough it actually is, but the most important thing for me is that I`m competing with myself. My score may be not hight enough right now, but this is just the beginning. I still have the time to improve myself from yesterday`s me. With commitment and better plan, I believe that I will be better than I was yesterday.',
    buttonLabel: 'Next',
    image: ImageOne,
    reverse: false,
    next: 'question-2'
};

export const QuestionTwo = {
    id: 'question-2',
    heading: 'Question 2',
    question: 'What would you like to ask or say for your friends who made it to the top of the board? What do you think has made them succeed? What can you learn from them?',
    answer: 'The one who made it to the top board is my classmate and I`m pretty sure he deserves it. He knows the subject more than anyone in the class and yet so helpful. I think that`s what I can learn, not only learn for ourself but also for others.',
    buttonLabel: 'Next',
    image: ImageTwo,
    reverse: true,
    next: 'question-3'
};

export const QuestionThree = {
    id: 'question-3',
    heading: 'Question 3',
    question: 'Some of your friends might feel sad after seeing their score is low/not as expected. Some even say they feel like they’re in a dark tunnel because they have struggled to keep up with the rest of the class. What will you recommend them to do to finally “see the light again”? ',
    answer: 'I always remind myself that I have tried my best and as long as I keep doing it and make an improvement, no matter about the score, you still win over yourself, and that`s enough.',
    buttonLabel: 'Next',
    image: ImageThree,
    reverse: false,
    next: 'hero'
};