import React from 'react'
import Head from 'next/head'

import Registration from '../components/Registration'
import Data from '../components/Data'

const Index = props => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
    </Head>

    <div className="container">
      <h1>SIT CRAFT Camp Registration</h1>
      <Registration />
      <hr />
      <Data />
    </div>
  </div>
)

export default Index
