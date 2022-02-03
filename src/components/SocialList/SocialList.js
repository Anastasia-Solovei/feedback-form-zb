import React from 'react';
import styled from 'styled-components';

import { device } from '../../breakpoints';
import sprite from '../../images/icons.svg';

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 26px;
`;

const Link = styled.a`
  display: inline-flex;
  width: 10px;
  height: 10px;

  @media ${device.tablet} {
    width: 16px;
    height: 16px;
  }
`;

export default function SocialList() {
  return (
    <List>
      <ListItem>
        <Link href="https://www.linkedin.com/">
          <svg>
            <use href={sprite + '#icon-linkedin'}></use>
          </svg>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://twitter.com/">
          <svg>
            <use href={sprite + '#icon-twitter'}></use>
          </svg>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.facebook.com/">
          <svg>
            <use href={sprite + '#icon-fb'}></use>
          </svg>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.pinterest.com/">
          <svg>
            <use href={sprite + '#icon-pinterest'}></use>
          </svg>
        </Link>
      </ListItem>
    </List>
  );
}
