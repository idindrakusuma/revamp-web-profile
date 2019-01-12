import React from "react"

import Button from '../components/Button';
import { Wrapper } from './styles';
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div> Hello Indra!</div>
        <Button text="Test Button" />
      </Wrapper>
    )
  }
}

export default App;
