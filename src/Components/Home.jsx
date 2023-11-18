import React from 'react';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
        <Helmet>
            <meta property='og:title' content='Hello world'/>
        </Helmet>
        <h2>Hello</h2>
    </>
  )
}

export default Home