import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { addFeedback } from '../../redux/feedback/feedback-operations';

const Form = styled.form`
  width: 563px;
  padding: 0px 3px 0px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 31px 46px 30px;

  font-size: 18px;
  line-height: 1.77;
  color: #2d2d2d;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 31px 46px 30px;

  font-size: 18px;
  line-height: 1.77;
  color: #2d2d2d;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-top: 23px;
  width: 218px;
  padding: 27px 52px 28px;
  background: #fad34f;
  border-radius: 500px;

  font-size: 18px;
  line-height: 1;
  color: #ffffff;
  border: none;
`;

export default function FeedbackForm() {
  const nameInputId = uuidv4();
  const emailInputId = uuidv4();
  const messageInputId = uuidv4();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMassage] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'message':
        setMassage(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addFeedback({
        id: uuidv4(),
        name: name,
        email: email,
        message: message,
      }),
    );
    console.log(name, email, message);

    setName('');
    setEmail('');
    setMassage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name should consist of letters, dashes and spaces. Foe example: Adrian, Jacob Mercer, Charles de Batz d'Artagnan etc."
        placeholder="Your name*"
        id={nameInputId}
        required
      />

      <Label htmlFor={emailInputId}>Email</Label>
      <Input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        pattern="\S+@[a-z]+.[a-z]+"
        title="Enter a valid email"
        placeholder="Your e-mail*"
        id={emailInputId}
        required
      />

      <Label htmlFor={messageInputId}>Message</Label>
      <Textarea
        rows="4"
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
        placeholder="Your message*"
        id={messageInputId}
        required
      ></Textarea>

      <Button type="submit">Send message</Button>
    </Form>
  );
}
