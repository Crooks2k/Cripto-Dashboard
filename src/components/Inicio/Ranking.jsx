import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import RankingTable from './RankingTable';
import PreHeader from '../PreHeader/PreHeader';
import Header from '../Header/Header';

function Ranking() {
    const [criptolist, setcriptolist] = useState([]);

  useEffect(() => {
    //Api response init
    async function ApiRes() {
      try{
       const dataRes = await (await fetch("https://api.coinlore.net/api/tickers/")).json()
       setcriptolist(dataRes.data) //set api response in usestate (criptolist)
      }
      catch(error){ //create a catch function to recolect reponse error
       console.error(error) //console.error returns error in console
      }
   }
   ApiRes()
  }, []);
  console.log(criptolist)
  let i=0
  return (
    <main>
      <PreHeader/>
      <Header/>
      <h3 id="first-tittle">Top criptomonedas por capitazalicion de mercado</h3>
      <div id="table-rank">
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>1h %</th>
                  <th>24h %</th>
                  <th>7d %</th>
                  <th>cap. mercado</th>
                  <th>Volumen (24h)</th>
              </tr>
              </thead>
              <tbody>
                  
                  {
                      criptolist.map(item=>{
                          return(
                          <RankingTable key={item.id} item={item}/>
                          )
                      })
                  }
                  
              </tbody>
          </Table>
    </div>
   </main>
  )
}

export default Ranking