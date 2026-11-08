
import './App.css'
import Sidebar from './components/Sidebar';
import Header from './components/header';
import DoctorsContent from './components/DoctorsContent';

function ScreenDoc() {
  return (
    <div className="app">
      <Header />

      <div className="app-body">
        <Sidebar />
        <DoctorsContent />
      </div>

      <footer className="footer">
        Copyrights 2026 - All Rights Reserved.
      </footer>
    </div>
  );
}

export default ScreenDoc;