import React from 'react'

function RankingTable({item}) {
  return (
        <tr>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>{item.price_usd}</td>
            <td>{item.percent_change_1h}</td>
            <td>{item.percent_change_24h}</td>
            <td>{item.percent_change_7d}</td>
            <td>{item.market_cap_usd}</td>
            <td>{item.volume24}</td>
        </tr>
  )
}

export default RankingTable