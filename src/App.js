import './App.css';
import GlamUpNavbar from "./navbar/navbar";
import GlamUpFooter from './footer/footer';
import GlamUpContactPage from './contactpage/contactpage';


function App() {
  return (
    <div className="App">
      <div>
        <GlamUpNavbar />
      </div>


        <div className='contents'>
          <GlamUpContactPage/>
        </div>

      <div className="footer">
        <GlamUpFooter />
      </div>

    </div>
  );
}

export default App;
