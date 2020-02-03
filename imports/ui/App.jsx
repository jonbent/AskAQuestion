import React from 'react';
import '/imports/scss/App.scss';
import Navbar from "./navbar/NavbarContainer";
import Questions from "./questions/QuestionsContainer";
const App = () => {
    return (
        <div className="App">
             <Questions/>
         </div>
    );
};

export default App;