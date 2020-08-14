import React from 'react'

import PageHeader from '../../components/PageHeader'
import Welcome from '../../components/Welcome'
import NewFromFriends from '../../components/NewFromFriends'
import Banner from '../../components/Banner'
import PopularWithFriends from '../../components/PopularWithFriends'
import PopularReviews from '../../components/PopularReviews'
import PopularLists from '../../components/PopularLists'
import RecentShowdowns from '../../components/RecentShowdowns'
import RecentNews from '../../components/RecentNews'
import PageFooter from '../../components/PageFooter'

function Home() {
  return (
    <div id="home-page">
      <PageHeader />
      <main className="container">
        <Welcome />
        <NewFromFriends />
        <Banner />
        <PopularWithFriends />
        <PopularReviews />
        <PopularLists />
        <RecentShowdowns />
        <RecentNews />
      </main> 
      <PageFooter />
    </div>
  )
}

export default Home