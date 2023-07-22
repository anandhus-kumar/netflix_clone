import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Up Comming' fetchURL={request.requestUpcomming} />
      <Row rowID='2' title='Popular' fetchURL={request.requestPopular} />
      <Row rowID='3' title='Trending' fetchURL={request.requestTrending} />
      <Row rowID='4' title='Toprated' fetchURL={request.requestToprated} />
      <Row rowID='5' title='Thriller' fetchURL={request.requestThriller} />

    </div>
  )
}

export default Home