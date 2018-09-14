import React from 'react'

export default (props) => {
  return (
    <div>
        <label>Auction Id:</label>
        <input type="number" id="number"/>
        <button onClick={props.addAuction}>Add Auction</button>
    </div>
  )
}
