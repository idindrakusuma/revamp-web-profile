import React, { Fragment, PureComponent } from 'react';
import { object, string, arrayOf } from 'prop-types';
import { isEmpty } from 'lodash';

import { avatar, name, socialMedia } from './styles';
import IndraKusumaProfilePhoto from '../assets/indrakusuma.jpg';

class SideBarDesktop extends PureComponent {
  static propTypes = {
    fullName: string,
    title: string,
    socialMediaData: arrayOf(object),
    listMenu: object.isRequired,
    copyright: string,
  };

  static defaultProps = {
    fullName: 'Indra Kusuma',
    title: 'Professional Web Developer',
    copyright: '',
    socialMediaData: [{}],
  };

  renderPhotoProfile = () => {
    return (
      <div css={avatar}>
        <img src={IndraKusumaProfilePhoto} alt="Indra Kusuma" />
      </div>
    );
  }

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
              <a href={element.href} target="_blank" title={element.title}>
                <i className={element.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderPhotoProfile()}
        {this.renderName()}
        {this.renderSocialMedia()}
      </Fragment>
    );
  }
};

export default SideBarDesktop;