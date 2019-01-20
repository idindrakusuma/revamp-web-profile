import React, { Fragment, Component } from 'react';

import CustomHelmet from '../../CustomHelmet';
import SidebarMenu from '../../SidebarMenu/Dekstop';
import { Header, MainPanel, Wrapper } from '../../Layouts';

import SocialMediaData from '../../../api/socialMediaData';
import ListMenuData from '../../../api/listMenuData';

class WithSidebar extends Component {
  render() {
    const { children } = this.props;
    
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

export default WithSidebar;
