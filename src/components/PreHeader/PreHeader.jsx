import React from 'react'
import {AiFillGithub} from "react-icons/ai"

function PreHeader() {
  return (
    <> 
    <div id="pre-header">
        <p>Criptomonedas: <span>9934</span></p>
        <p>Dominio: <span>BitCoin [BTC]</span></p>
        <p>BTC market cap: <span>$16,674.93 USD</span></p>
    </div>
    <div id="credits">
      <a href="https://github.com/Crooks2k" target="_blank"><span><AiFillGithub/> Crooks2k</span></a>
    </div>
    </>
   
  )
}

export default PreHeader