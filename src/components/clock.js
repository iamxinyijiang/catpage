import React from 'react'
//import ReactDOM from 'react-dom/client';
const Clock = () => {
  let currentDate = new Date()
  return (
    <div>
    <p>{currentDate.toDateString()}</p>
    </div>
  )


}

export default Clock