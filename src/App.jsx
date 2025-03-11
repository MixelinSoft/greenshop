import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header/Header';
import { menu } from './data/menu';
import Main from './components/layout/Main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          {menu.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={<item.component />}
            />
          ))}
        </Routes>
      </Main>
    </>
  );
};

export default App;
