import React from 'react'
import { Link } from 'react-router-dom'

function NotefoundPage() {
  return (
    <div className='not-found'>
        <h1>404 error </h1>
        <h3>Նման էջ գոյություն չունի</h3>
        <Link to="/">Գլխավոր էջ...</Link>
    </div>
  )
}

export default NotefoundPage