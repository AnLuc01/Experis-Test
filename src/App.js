import logo from './logo.svg';
import './App.css';
import ContactCard from './components/contactCard/contactCard';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [cardData, setCardData] = useState([])
const getCardData = () =>{
  axios.get(`https://my.api.mockaroo.com/users.json?key=aa675110`)
  .then(res => {
    const data = res.data;
    setCardData(data)
  })
}

useEffect(()=>{getCardData()},[])
  return (
    <div className="App">
     {cardData.map((card, index)=>
     <ContactCard name={card.first_name} surname={card.last_name} trust={card.trust} shared={card.shared_service}  />
     )}
    </div>
  );
}

export default App;
