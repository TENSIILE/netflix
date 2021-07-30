import React from 'react';
import Link from 'next/link';
import {ReactSVG} from 'react-svg';
import {Button} from '@/components';
import {Container, Content, Header, TextBlock, ImageBlock, Icon} from '@/layouts/404/404.styled';
import {ImageContainer} from '@/components/header/styled/header.styled';
import {Flex} from '@/styled/common.styled';
import {Head} from '@/layouts/head.layout';

const NotFoundPage: React.FC = () => (
  <>
    <Head title="404 Error" />
    <Container>
      <Header>
        <ImageBlock>
          <ImageContainer src="/img/netflix-header.jpg" alt="" />
        </ImageBlock>
        <TextBlock>
          <h1>Простите, но такого адреса не существует!</h1>
        </TextBlock>
      </Header>
      <Content>
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Icon>
            <ReactSVG src="/icons/404.svg" />
          </Icon>
          <Link href="/" passHref>
            <Button>Вернуться назад</Button>
          </Link>
        </Flex>
      </Content>
    </Container>
  </>
);

export default NotFoundPage;
