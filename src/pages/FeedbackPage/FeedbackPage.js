import React from 'react';
import styled from 'styled-components';

import FeedbackForm from '../../components/FeedbackForm';
import SocialList from '../../components/SocialList';

import cloudsImg from '../../images/clouds.png';
import ellipseImg from '../../images/yellow-ellipse.png';
import yellowSmallImg from '../../images/yellow_small.png';
import yellowBigImg from '../../images/yellow_big.png';
import pinkRightImg from '../../images/pink-right.png';
import pinkLeftImg from '../../images/pink-left.png';
import greenRightImg from '../../images/green.png';
import mapImg from '../../images/map.png';

const Container = styled.div`
  width: 1440px;
  margin-right: auto;
  margin-left: auto;
`;

const Content = styled.section`
  height: 928px;
  padding-top: 179px;
  padding-left: 147px;
  padding-right: 147px;

  background-repeat: no-repeat;
  background-position: left 714px top 21px, left 29px top 23px,
    left 763px top 516px, left 762px top 558px, right 0px top 0px,
    right 63px top 101px;
  background-image: url(${ellipseImg}), url(${yellowSmallImg}),
    url(${yellowBigImg}), url(${pinkRightImg}), url(${mapImg}),
    url(${cloudsImg});
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
  background-image: url(${pinkLeftImg}), url(${greenRightImg}),
    url(${yellowSmallImg});
`;

export default function FeedbackPage() {
  return (
    <Container>
      <Content>
        <Heading>Reach out to us!</Heading>
        <FeedbackForm />
      </Content>

      <Footer>
        <SocialList />
      </Footer>
    </Container>
  );
}
