import React, { Fragment, Component } from 'react';

import Button from '../components/Button';
import CustomHelmet from '../components/CustomHelmet';
import LinkButton from '../components/LinkButton';
import Title from '../components/Title';
import CardExperience from '../components/CardExperience';
import SidebarMenu from '../components/SidebarMenu/Dekstop';

import { 
  colXs6,
  container,
  row,
  Header,
  MainPanel,
  Wrapper
} from '../components/Layouts';

import SocialMediaData from './HomePage/socialMediaData';
class App extends Component {
  render() {
    return (
      <Fragment>
        <CustomHelmet />
        <Wrapper>
          <Header>
            <SidebarMenu socialMediaData={SocialMediaData}/>
          </Header>
          <MainPanel>
            <div css={container}>
              <Title text="Indra Kusuma - Software Enginer" />
              <div css={row}>
                <div css={colXs6}>
                  <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
                </div>
                <div css={colXs6}>
                  <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
                </div>
              </div>
              <div css={row}>
                <Button text="Test Button" icon="check" onAction={() => { }} />
                <LinkButton text="Link Button Test" link="https://google.com" />
              </div>
            </div>
          </MainPanel>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
