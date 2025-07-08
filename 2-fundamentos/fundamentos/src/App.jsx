import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Event';
import Challenge from './components/Challenge';


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <FirstComponent />
      <MyComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  )
}
export default App;