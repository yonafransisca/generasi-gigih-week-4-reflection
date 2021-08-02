import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import QuestionSection from './components/QuestionSection';
import { QuestionOne, QuestionThree, QuestionTwo } from './data/QuestionData';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Hero slides={SliderData} />
            <QuestionSection {...QuestionOne} />
            <QuestionSection {...QuestionTwo} />
            <QuestionSection {...QuestionThree} />
        </Router>
    );
}

export default App;
