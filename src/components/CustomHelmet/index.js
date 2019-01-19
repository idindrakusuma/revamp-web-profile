import React from 'react'
import { Helmet } from 'react-helmet';

import Favicon from './assets/favicon.png';

const CustomHelmet = () => {
  return (
    <Helmet>
      <title> Indra Kusuma - Software Engineer Web</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link rel="icon" href={Favicon} />
    </Helmet>
  );
};

export default CustomHelmet;