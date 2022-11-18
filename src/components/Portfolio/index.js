import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {
  return (
    <>
    <section className="my-5">
    <h1 id="portfolio">Portfolio</h1>
    </section>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '18rem' }} className="m-1">
            <Card.Body>
              <Card.Title className='card-text'>Bark-Woof</Card.Title>
              <Card.Text style={{ height: '10rem' }}>
                A website that allows the user to search a breed of dog which returns facts about that dog breed as well as popular hashtags that are breed specific.
              </Card.Text>
              <Button href="https://cvanbreda91.github.io/bark-woof/" variant="dark">Take a Look!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '18rem' }} className="m-1">
            <Card.Body>
              <Card.Title className='card-text'>Life Tracker</Card.Title>
              <Card.Text style={{ height: '10rem' }}>
                A professional habit tracking site that allows logged in users to add, edit, comment on, and delete blogs and workouts.
              </Card.Text>
              <Button href="https://vast-beach-17756.herokuapp.com/login" variant="dark">Take a Look!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '18rem' }} className="m-1">
            <Card.Body>
              <Card.Title className='card-text'>Jate</Card.Title>
              <Card.Text style={{ height: '10rem' }}>
                A professional text editor using PWA
              </Card.Text>
              <Button href="https://evening-sands-61839.herokuapp.com/" variant="dark bottom">Take a Look!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '18rem' }} className="m-1">
            <Card.Body>
              <Card.Title className='card-text'>Tech Now!</Card.Title>
              <Card.Text style={{ height: '10rem' }}>
                A professional technology blog site that allows logged in users to add, edit, comment on, and delete posts.
              </Card.Text>
              <Button href="https://salty-headland-67190.herokuapp.com/" variant="dark">Take a Look!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Portfolio;
