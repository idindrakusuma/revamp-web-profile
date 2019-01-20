import React from 'react';
import { isEmpty } from 'lodash';
import { object, arrayOf } from 'prop-types';
import { Link } from 'gatsby';

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
            <Link to={menu.href} title={menu.name}>{menu.name}</Link>
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
