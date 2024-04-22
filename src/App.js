import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Students from './Student';
import Professors from './Professors';

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <Students />;
      case 'professors':
        return <Professors />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <NavigationBar />
      <div>
        <div className="row">
          <Sidebar onPageChange={handlePageChange} />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;