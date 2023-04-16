import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header';
import FormPage from './pages/Form/FormPage';
alert('Не было времени заняться задание из-за рождения ребенка, в понедельник постараюсь выполнить')
export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
