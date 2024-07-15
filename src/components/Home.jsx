import React from 'react'
import { Hero } from './Hero'
import MatchDayComponent from './MatchDayComponent'
import { LastMatchday } from './LastMatchday'
import Match from './Match'
import { Footer } from './Footer'
import { Built } from './Built'

const Home = () => {
  return (
    <div>
        <Hero />
        <MatchDayComponent />
        <LastMatchday />
        <Match />
        <Footer />
        <Built />
    </div>
  )
}

export default Home