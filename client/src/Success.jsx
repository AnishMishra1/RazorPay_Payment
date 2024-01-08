import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Success = () => {
    const search = useSearchParams()[0]
    const refernceNo = search.get('reference')
  return (
    <div>Success{-refernceNo}</div>
  )
}

export default Success