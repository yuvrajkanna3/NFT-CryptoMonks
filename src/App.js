import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import CollectionCard from './components/CollectionCard';
import React from 'react'
import ReactDOM from 'react-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Punklist from './components/Punklist';

function App() {
  const [punkListData,setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x9F687D07C5eD72a4490a5B685ef9Be1385d8d375&order_direction=asc'  
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      <Punklist punkListData={punkListData} />
    </div>
   
  );
}

export default App;
