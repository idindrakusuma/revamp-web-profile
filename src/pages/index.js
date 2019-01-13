import React, { Fragment, Component } from 'react';

import Button from '../components/Button';
import CustomHelmet from '../components/CustomHelmet';
import LinkButton from '../components/LinkButton';
import Title from '../components/Title';
import CardExperience from '../components/CardExperience';

import { Header, Main, Menu, Section, Row, FlexGrid, FlexContent, Wrapper } from '../components/Layouts';
class App extends Component {
  render() {
    return (
      <Fragment>
        <CustomHelmet />
        <Wrapper>
          <Header>
            <Menu> Hello ini Menu </Menu>
          </Header>
          <Main>
            <Section>
              <Title text="Indra Kusuma - Software Enginer" />
              <FlexGrid>
                <FlexContent>
                  <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
                </FlexContent>
                <FlexContent>
                  <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
                </FlexContent>
                <FlexContent>
                  <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
                </FlexContent>
              </FlexGrid>
              <Row>
                <Button text="Test Button" icon="check" />
                <LinkButton text="Link Button Test" link="https://google.com" />
              </Row>
            </Section>
          </Main>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
