import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import Sidebar from './components/sidebar/sidebar';
import AppState, { AppStateInterface } from './util/appState';
import PageContainer from './components/pageContainer';

const MainContainer = () => {
  return (
    <div className="h-screen w-screen | flex flex-row | bg-primary-light dark:bg-dark-primary-light text-primary-text dark:text-dark-primary-text">
      <Sidebar />
      <PageContainer />
    </div>
  );
};

export default function App() {
  const [appState, setAppState] = useState<AppStateInterface>({
    currPageIdx: 0,
  });

  return (
    <AppState.Provider value={{ appState, updateAppState: setAppState }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Router>
    </AppState.Provider>
  );
}
