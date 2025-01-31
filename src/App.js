import './App.css';
import Header from './components/Header';
import CentralContent from './components/CentralContent';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
      <main>
        <CentralContent />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
