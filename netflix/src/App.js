import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import GenresSelection from './components/GenresSelection';
import TrendingNow from './components/TrendingNow';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>

      <main>
        <GenresSelection />
        <TrendingNow />
      </main>
      <footer>

        <MyFooter />
      </footer>
    </>
  );
}

export default App;
