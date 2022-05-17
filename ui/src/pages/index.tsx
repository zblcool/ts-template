import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { BsTrash as DeleteIcon } from 'react-icons/bs'
import { useQuery } from 'react-query'
import Clock from '../components/Clock'
import axios from 'axios'

const StyledText = styled.div`
color: magenta;
font-style: italic;
font-size: 30px;
`

const Page = () => {
  // react query example - getting current time
  const getTime = useQuery(['currentTime'], async () => {
    // sleep 3 seconds
    await new Promise(resolve => setTimeout(resolve, 2000))
    return new Date().toISOString()
  }, {
    refetchInterval: 4000
  })

  // react query example - fetching from backend
  const getHello = useQuery(['hello'], async () => {
    return axios.get('/api/hello').then(res => res.data)
  }, {
    refetchInterval: 4000
  })

  return (
    <div className="p-5">
      <h1>Hello world!</h1>
      <Clock />
      <Button variant="success">A Bootstrap button!</Button>
      <StyledText>Some styled components.</StyledText>
      <DeleteIcon className="h1" /> React Icons
      <div>React Query - <span>{getTime?.data}</span>
        <pre>{JSON.stringify(getTime, null, 2)}</pre>
      </div>
      <div>React Query - hello
        <pre>{JSON.stringify(getHello, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Page
