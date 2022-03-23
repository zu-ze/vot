import { Header, Voter, Footer} from './containers'
import './App.css'

function App() {
  return (
    <div>
      <header className="vot__header gradient__bg-02">
        <Header />
      </header>
      <Voter />
      <Footer />
    </div>
  );
}

export default App;
