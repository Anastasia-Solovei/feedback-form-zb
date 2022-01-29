import React from 'react';
import styled from 'styled-components';

import FeedbackForm from '../../components/FeedbackForm';
import SocialList from '../../components/SocialList';

const Container = styled.div`
  width: 1440px;
  margin-right: auto;
  margin-left: auto;
`;

const Main = styled.main`
  background-repeat: no-repeat;
  background-position: right 63px top 101px;
  background-image: url('../../images/clouds.png');
`;

const Content = styled.section`
  height: 928px;
  padding-top: 179px;
  padding-left: 147px;
  padding-right: 147px;

  background-repeat: no-repeat;
  background-position: left 714px top 21px, left 29px top 23px,
    left 763px top 516px, left 762px top 558px, right 0px top 0px;
  background-image: url('../../images/yellow-ellipse.png'),
    url('../../images/yellow_lefy.png'), url('../../images/yellow_right.png'),
    url('../../images/pink-right.png'), url('../../images/map.png');
`;

const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  line-height: 1.3;
  color: #3e3e3e;
`;

const Footer = styled.footer`
  height: 200px;
  padding: 79px 343px;

  border: 1px solid #d8d8d8;
  background-color: #fafafa;
  background-repeat: no-repeat;
  background-position: left 15px bottom 0px, right 127px bottom 103px,
    left 1356px bottom 28px;
  background-image: url('../../images/pink-left.png'),
    url('../../images/green-right.png'), url('../../images/yellow_lefy.png');
`;

export default function FeedbackPage() {
  return (
    <Container>
      <Main>
        <Content>
          <Heading>Reach out to us!</Heading>
          <FeedbackForm />
        </Content>
      </Main>
      <Footer>
        <SocialList />
      </Footer>
    </Container>
  );
}
