import React, { Fragment, Component } from 'react';

import CustomHelmet from '../../CustomHelmet';
import SidebarMenu from '../../SidebarMenu/Dekstop';
import { MainPanel, Wrapper } from '../../Layouts';

import SocialMediaData from '../../../api/socialMediaData';
import ListMenuData from '../../../api/listMenuData';

class WithSidebar extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimension();
    window.addEventListener('resize', this.updateWindowDimension);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimension);
  }

  updateWindowDimension = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { children } = this.props;
    const { width } = this.state;

    return (
      <Fragment>
        <CustomHelmet />
        <Wrapper>
          {width <= 1024 ? null : <SidebarMenu socialMediaData={SocialMediaData} listMenu={ListMenuData} />}
          <MainPanel>{children}</MainPanel>
        </Wrapper>
      </Fragment>
    );
  }
}

export default WithSidebar;
