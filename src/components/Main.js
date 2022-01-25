import React, { useEffect } from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import { useState } from 'react/cjs/react.development';

const Main = (selectedPunk, punkListData) => {
    const[activePunk,setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData,selectedPunk])


  return (
  
  <div className='main'>
      <div className='mainContent'>
          <div className='punkHighlight'>
              <div className='punkContainer'>
                  <img className='selectedPunk' 
                  src={activePunk.image_original_url}/>
              </div>
          </div>
          <div className='punkDetails' style={{color:'#fff'}}>
              <div className='title'>
                  The MainG
              </div>
              <span className='itemNumber'>.#3</span>
          </div>
          <div className='owner'>
              <div className='ownerImageContainer'>
                  <img src='https://ipfs.thirdweb.com/ipfs/bafkreifnjazq7xkqxabzq4snkcm6hmsdlo354pl3cx3zv5nwz5twg3xvwq'
                  />
              </div>
              <div className='ownerDetails'>
                  <div className='ownerNameAndHandle'>
                      <div>0x3FfA1398732d846b4A9C462EA538fA25026Ac4Ce</div>
                      <div className='ownerHandle'>@yuvrajkanna</div>
                  </div>
                  <div className='ownerLink'>
                      <img src={instagramLogo}/>
                  </div>
                  <div className='ownerLink'>
                      <img src={twitterLogo}/>
                  </div>
                  <div className='ownerLink'>
                      <img src={moreIcon}/>
                  </div>
              </div>
          </div>
      </div>
  </div>
    
    )
};

export default Main;
