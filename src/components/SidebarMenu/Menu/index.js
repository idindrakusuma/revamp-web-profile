import React from 'react';
import { isEmpty } from 'lodash';
import { object, arrayOf } from 'prop-types';

import { navigation } from './styles';

const Menus = ({ listMenu }) => {
  if (isEmpty(listMenu)) {
    return null;
  }

  return (
    <div css={navigation}>
      <ul>
        {listMenu.map((menu, index) => (
          <li key={index}>
            <a href={menu.href}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Menus.propTypes = {
  listMenu: arrayOf(object),
};

Menus.defaultProps = {
  listMenu: [{}],
};

export default Menus;
