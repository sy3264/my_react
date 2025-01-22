import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Site from '../components/Site'
import Port from '../components/Port'
import Main from '../components/Main'

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header/>
      <Main id="main" role="main">
        <Intro />
        <Skill />
        <Site />
        <Port />
      <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView
