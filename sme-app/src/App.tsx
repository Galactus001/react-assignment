import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import { StepperContextProvider } from './components/context/stepper-context';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Companies from './components/Companies';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <StepperContextProvider>
              <Header />
              <FormSection />
              <Footer />
            </StepperContextProvider>
          }
        />
        <Route path='/companies' element={<Companies />} />
      </Routes>
    </Router>
  );
}

export default App;
