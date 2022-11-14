import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/Content';
import AppHeader from './components/Header';
import PageTitle from './components/Title';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>My ToDo List App</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1rem',
          },
        }}
      />
    </>
  );
}

export default App;
