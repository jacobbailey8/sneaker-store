import Header from "./components/Header";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";
import ShoePage from "./components/ShoePage";



function App() {

  const shoes = {
    dunks: [

    ],
    airforces: [
      {
        name: 'Air Force 1 - White',
        price: 110,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png',
      },
      {
        name: 'Air Force 1 - White',
        price: 110,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png',
      },
      {
        name: 'Air Force 1 - White',
        price: 110,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png',
      },
      {
        name: 'Air Force 1 - White',
        price: 110,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png',
      },
      {
        name: 'Air Force 1 - White',
        price: 110,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png',
      },
      {
        name: 'Air Force 1 - White',
        price: 110,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png',
      }


    ],
    jordans: [

    ],
    others: [

    ]

  }

  
  return (
    <div className="App">
      <Header />
      
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/sneaker-store' element={<Home/>}/>
          <Route path='/sneaker-store/dunks' element={<ShoePage shoes={shoes.airforces}/>}/>
          <Route path='/sneaker-store/jordans' element={<ShoePage shoes={shoes.airforces}/>}/>
          <Route path='/sneaker-store/af1' element={<ShoePage title={'Air Force 1'} shoes={shoes.airforces}/>}/>
          <Route path='/sneaker-store/collabs' element={<ShoePage shoes={shoes.airforces}/>}/>
        </Routes>
      </BrowserRouter>
      
    


      
    </div>
  );
}

export default App;
