import React, { Fragment, PureComponent } from 'react';
import { object, string, arrayOf } from 'prop-types';
import { isEmpty } from 'lodash';

import ListMenu from '../Menu';

import { avatar, name, socialMedia, copyright } from './styles';
import IndraKusumaProfilePhoto from '../assets/indrakusuma.jpg';

class SideBarDesktop extends PureComponent {
  static propTypes = {
    fullName: string,
    title: string,
    socialMediaData: arrayOf(object),
    listMenu: object.isRequired,
    copyrightText: string,
  };

  static defaultProps = {
    fullName: 'Indra Kusuma',
    title: 'Professional Web Developer',
    copyrightText: '',
    socialMediaData: [{}],
  };

  renderPhotoProfile = () => {
    return (
      <div css={avatar}>
        <img src={IndraKusumaProfilePhoto} alt="Indra Kusuma" />
      </div>
    );
  };

  renderName = () => {
    const { fullName, title } = this.props;

    return (
      <div css={name}>
        <h1>{fullName}</h1>
        <span>{title}</span>
      </div>
    );
  };

  renderSocialMedia = () => {
    const { socialMediaData } = this.props;

    if (isEmpty(socialMediaData)) {
      return undefined;
    }

    return (
      <div css={socialMedia}>
        <ul>
          {socialMediaData.map(element => (
            <li key={element.code}>
              <a href={element.href} target="_blank" rel="noopener noreferrer" title={element.title}>
                <i className={element.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  renderListMenu = () => {
    const { listMenu } = this.props;

    return <ListMenu listMenu={listMenu} />;
  };

  renderCopyRight = () => {
    const { copyrightText } = this.props;

    return (
      <div css={copyright}>
        {isEmpty(copyrightText) ?
          <span>{`© ${new Date().getFullYear()} Indra Kusuma`}</span> :
          <span>{copyrightText}</span>}
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderPhotoProfile()}
        {this.renderName()}
        {this.renderSocialMedia()}
        {this.renderListMenu()}
        {this.renderCopyRight()}
      </Fragment>
    );
  }
}

export default SideBarDesktop;
