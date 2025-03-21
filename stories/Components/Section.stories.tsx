import React from 'react';

import { Meta } from "@storybook/react";
import { Card, CardBody, CardText, Col, Container, Row, Section } from '../../src';

const meta: Meta<typeof Section> = {
  title: "Documentazione/Componenti/Section",
  component: Section
};

export default meta;

//type Story = StoryObj<typeof Section>;

export const Esempio = () => {
  return (
    <Section aria-labelledby="titleEx1">
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h2 id="titleEx1">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoTenue = () => {
  return (
    <Section color='muted' aria-labelledby="titleEx2">
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h2 id="titleEx2">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoPrimario = () => {
  return (
    <Section color='primary' aria-labelledby="titleEx3">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx3">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoNeutrale = () => {
  return (
    <Section color='neutral' aria-labelledby="titleEx4">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx4">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const ImmagineDiSfondo = () => {
  return (
    <Section image='https://picsum.photos/1280/720?image=811' aria-labelledby="titleEx5">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx5">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SectionConCard = () => {
  return (
    <Section color='muted' aria-labelledby="titleEx6">
      <h2 id="titleEx6">Morbi fermentum amet</h2>
      <Row>
        <Col sm={6}>
          <Card className='shadow h-100' noWrapper>
            <CardBody>
              <CardText>
                Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet
                justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan.
                Diam maecenas ultricies mi eget mauris pharetra et.{' '}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='shadow h-100' noWrapper>
            <CardBody>
              <CardText>
                Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed
                vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus
                elementum sagittis.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};
ImmagineDiSfondo.storyName = 'Immagine di sfondo';

SectionConCard.storyName = 'Section con Card';
