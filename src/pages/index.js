import React, { Fragment } from "react"
import { Helmet } from 'react-helmet';

import { Wrapper } from './styles';

import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title> Indra Kusuma - Software Engineer Web</title>
        </Helmet>
        <Wrapper>
          <div> Hello Indra!</div>
          <Button text="Test Button" />
          <LinkButton text="Link Button Test" link="https://google.com"/>
        </Wrapper>
      </Fragment>
    )
  }
}

export default App;
