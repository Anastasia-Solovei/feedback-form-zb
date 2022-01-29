import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './FeedbackForm.module.css';

export default function FeedbackForm() {
  const nameInputId = uuidv4();
  const emailInputId = uuidv4();
  const messageInputId = uuidv4();
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <form className={s.FeedbackForm} onSubmit={handleSubmit}>
      <div className={s.InputOverlay}>
        <label className={s.InputLabel} htmlFor={nameInputId}></label>
        <input
          className={s.Input}
          type="text"
          name="name"
          //value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name should consist of letters, dashes and spaces. Foe example: Adrian, Jacob Mercer, Charles de Batz d'Artagnan etc."
          placeholder="Your name*"
          id={nameInputId}
          required
        />
      </div>

      <div className={s.InputOverlay}>
        <label className={s.InputLabel} htmlFor={emailInputId}></label>
        <input
          className={s.Input}
          type="text"
          name="email"
          //value={email}
          onChange={handleChange}
          pattern="\S+@[a-z]+.[a-z]+"
          title="Enter a valid email"
          placeholder="Your e-mail*"
          id={emailInputId}
          required
        />
      </div>

      <div className={s.InputOverlay}>
        <label className={s.InputLabel} htmlFor={messageInputId}></label>
        <textarea
          className={s.Input}
          rows="4"
          type="text"
          name="message"
          //value={message}
          onChange={handleChange}
          placeholder="Your message*"
          id={messageInputId}
          required
        ></textarea>
      </div>

      <button className={s.FormButton} type="submit">
        Send message
      </button>
    </form>
  );
}
