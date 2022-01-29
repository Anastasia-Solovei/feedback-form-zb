import React from 'react';

import FeedbackForm from '../../components/FeedbackForm';
import SocialList from '../../components/SocialList';

import s from './FeedbackPage.module.css';

export default function FeedbackPage() {
  return (
    <>
      <div className={s.Section}>
        <h1 className={s.FormHeading}>Reach out to us!</h1>
        <FeedbackForm />
      </div>
      <div className={s.Footer}>
        <SocialList />
      </div>
    </>
  );
}
