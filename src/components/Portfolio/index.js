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
            <Card style={{ width: '18rem', height: '30rem' }} className="m-2">
              <Card.Img style={{ height: '18rem' }} variant="top" alt="Bark-woof site" src="https://github.com/cvanbreda91/react-succulant/blob/main/public/assets/img/bark-woof.png?raw=true/100px180" />
              <Card.Body>
                <Card.Title className='card-text'>Bark-Woof</Card.Title>
                <Card.Text>
                  A website that allows the user to search a breed of dog which returns facts about that dog breed as well as hashtags.
                </Card.Text>
                <Button target="_blank" href="https://cvanbreda91.github.io/bark-woof/" variant="dark" className="m-2">Take a Look!</Button>
                <Button target="_blank" href="https://github.com/cvanbreda91/bark-woof" variant="dark" className="m-2">Github</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '30rem' }} className="m-2">
              <Card.Img style={{ height: '18rem' }} variant="top" alt="Life Tracker site" src="https://github.com/cvanbreda91/react-succulant/blob/main/public/assets/img/life-tracker.png?raw=true/100px180" />
              <Card.Body>
                <Card.Title className='card-text'>Life Tracker</Card.Title>
                <Card.Text style={{ height: '9rem' }}>
                  A professional habit tracking site that allows logged in users to add, edit, comment on, and delete blogs and workouts.
                </Card.Text>
                <Button target="_blank" href="https://vast-beach-17756.herokuapp.com/login" variant="dark" className="m-2">Take a Look!</Button>
                <Button target="_blank" href="https://github.com/cvanbreda91/habitual-habits" variant="dark" className="m-2">Github</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '30rem' }} className="m-2">
              <Card.Img style={{ height: '18rem' }} variant="top" alt="JATE site" src="https://github.com/cvanbreda91/react-succulant/blob/main/public/assets/img/JATE.png?raw=true/100px180" />
              <Card.Body>
                <Card.Title className='card-text'>Jate</Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  A professional text editor using PWA
                </Card.Text>
                <Button target="_blank" href="https://evening-sands-61839.herokuapp.com/" variant="dark bottom" className="m-2">Take a Look!</Button>
                <Button target="_blank" href="https://github.com/cvanbreda91/text-extreme" variant="dark" className="m-2">Github</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '30rem' }} className="m-2">
              <Card.Img style={{ height: '18rem' }} variant="top" alt="Tech Now! site" src="https://github.com/cvanbreda91/react-succulant/blob/main/public/assets/img/Tech-Now.png?raw=true/100px180" />
              <Card.Body>
                <Card.Title className='card-text'>Tech Now!</Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  A professional technology blog site that allows logged in users to add, edit, comment on, and delete posts.
                </Card.Text>
                <Button target="_blank" href="https://salty-headland-67190.herokuapp.com/" variant="dark" className="m-2">Take a Look!</Button>
                <Button target="_blank" href="https://github.com/cvanbreda91/curly-octo-succotash" variant="dark" className="m-2">Github</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '30rem' }} className="m-2">
              <Card.Img style={{ height: '18rem' }} variant="top" alt="Note Taker site" src="https://github.com/cvanbreda91/react-succulant/blob/main/public/assets/img/Note-Taker.png?raw=true/100px180" />
              <Card.Body>
                <Card.Title className='card-text'>Note Taker</Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  A professional note taking applications to orgainize thoughts and keep track of tasks.
                </Card.Text>
                <Button target="_blank" href="https://patienceplease-app.herokuapp.com/" variant="dark" className="m-2">Take a Look!</Button>
                <Button target="_blank" href="https://github.com/cvanbreda91/notes-and-boats" variant="dark" className="m-2">Github</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '30rem' }} className="m-2">
              <Card.Img style={{ height: '18rem' }} variant="top" alt="Patients Please site" src="https://github.com/cvanbreda91/PatientsPlease/blob/main/client/src/assets/PatientsPlease-Logo-removebg-preview.png?raw=true" />
              <Card.Body>
                <Card.Title className='card-text'>PatientsPlease </Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  A website that allows users sign up and track patient data
                </Card.Text>
                <Button target="_blank" href="https://cvanbreda91.github.io/rubber-boots/" variant="dark" className="m-2">Take a Look!</Button>
                <Button target="_blank" href="https://github.com/cvanbreda91/PatientsPlease" variant="dark" className="m-2">Github</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
