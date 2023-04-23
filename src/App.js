import logo from './logo.svg';
// import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Footer from './Component/Footer';

function App() {
  return (<div style = {{ marginLeft : "10%",width : "1000px",heigth : "100%",backgroundColor : "#c8f4d0",boxShadow : "0 0 20px black"}}>
    <div style = {{margin : "50px",padding : "40px",backgroundColor : "black",borderRadius : "20px"}}>
    <div style = {{width : "300px",heigth : "60px",width  :"880px",margin : '-30px',padding  :"-30px",backgroundColor:"white"}}>
      <Navbar />
      <Main />
      <Footer />

      </div>
    </div>
    </div>
  );
}

export default App;
