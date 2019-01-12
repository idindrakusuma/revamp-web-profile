import React, { Fragment } from "react"
import { Helmet } from 'react-helmet';

import { Wrapper } from './styles';

import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import Title from '../components/Title';
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title> Indra Kusuma - Software Engineer Web</title>
        </Helmet>
        <Wrapper>
          <Title text="Indra Kusuma - Software Enginer" />
          <Button text="Test Button" />
          <LinkButton text="Link Button Test" link="https://google.com"/>
        </Wrapper>
      </Fragment>
    )
  }
}

export default App;
