import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import {Button} from '@/components';
import {
  Container,
  Content,
  Header,
  TextBlock,
  ImageBlock,
  Icon,
} from '@/pages/notFound/not-found.styled';
import {Flex} from '@/styled/common.styled';
import header_img from '@/static/img/netflix-header.jpg';
import notFoundSvg from '@/static/icons/404.svg';

export const NotFoundPage: React.FC = () => (
  <Container>
    <Header>
      <ImageBlock>
        <img src={header_img} alt="" />
      </ImageBlock>
      <TextBlock>
        <h1>Простите, но такого адреса не существует!</h1>
      </TextBlock>
    </Header>
    <Content>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Icon>
          <ReactSVG src={notFoundSvg} />
        </Icon>
        <Link to="/">
          <Button>Вернуться назад</Button>
        </Link>
      </Flex>
    </Content>
  </Container>
);
