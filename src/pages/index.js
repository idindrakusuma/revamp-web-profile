import React, { Fragment } from "react";

import Button from '../components/Button';
import CustomHelmet from '../components/CustomHelmet';
import LinkButton from '../components/LinkButton';
import Title from '../components/Title';

import { Wrapper } from './styles';
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <CustomHelmet />
        <Wrapper>
          <Title text="Indra Kusuma - Software Enginer" />
          <Button text="Test Button" icon="check" />
          <LinkButton text="Link Button Test" link="https://google.com" />
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
