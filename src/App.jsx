import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

import Home from "./Components/Home";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta property="og:title" content="Hello"/>
        </Helmet>
        <Home />
      </HelmetProvider>
    </>
  );
}

export default App;
