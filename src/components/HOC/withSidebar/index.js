import React, { Fragment, Component } from 'react';

import CustomHelmet from '@components/CustomHelmet';
import SidebarMenu from '@components/SidebarMenu/Dekstop';

import SocialMediaData from '@src/api/HomePage/socialMediaData';
import ListMenuData from '@src/api/HomePage/ListMenuData';
import { Header, MainPanel, Wrapper } from '@components/Layouts';

class withSidebar extends Component {
  render() {
    const { children } = this.props;
    console.log('[Masuk sini...]');

    return (
      <Fragment>
        <CustomHelmet />
        <Wrapper>
          <Header>
            <SidebarMenu socialMediaData={SocialMediaData} listMenu={ListMenuData} />
          </Header>
          <MainPanel>
            {children}
          </MainPanel>
        </Wrapper>
      </Fragment>
    );
  }
}

export default withSidebar;
