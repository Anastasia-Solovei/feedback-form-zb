import React from 'react';
import { Link } from 'react-router-dom';
import s from './SocialList.module.css';
import sprite from '../../images/icons.svg';

export default function SocialList() {
  return (
    <ul className={s.SocialList}>
      <li className={s.SocialItem}>
        <a href="/" className={s.SocialLink}>
          <svg>
            <use href={sprite + '#icon-linkedin'}></use>
          </svg>
        </a>
      </li>
      <li className={s.SocialItem}>
        <a href="/" className={s.SocialLink}>
          <svg>
            <use href={sprite + '#icon-twitter'}></use>
          </svg>
        </a>
      </li>
      <li className={s.SocialItem}>
        <a href="/" className={s.SocialLink}>
          <svg>
            <use href={sprite + '#icon-fb'}></use>
          </svg>
        </a>
      </li>
      <li className={s.SocialItem}>
        <a href="/" className={s.SocialLink}>
          <svg>
            <use href={sprite + '#icon-pinterest'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}
