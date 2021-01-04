import React from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Loader from './Loader'

interface nodeprops {
  id: string
  name: string
  image: string
}

const Space_X = gql`
  {
    ships(limit: 8) {
      id
      image
      name
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(Space_X)
  if (loading) return <Loader />
  if (error) return <p>Error : </p>
  return (
    <Container style={{ maxWidth: '1240px' }}>
      <h1 style={{ textAlign: 'center' }}>Hello From Space X</h1>
      {console.log(data.ships)}
      <Row className='mx-auto'>
        {data.ships.map(({ id, name, image }: nodeprops) => (
          <Col key={id} sm={12} md={6} lg={4} xl={3}>
            <Card
              className='mx-auto'
              style={{
                width: '18rem',
                padding: '10px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <Card.Title
                style={{
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                <>{name}</>
              </Card.Title>
              <Card.Img variant='top' src={image} style={{ height: '170px' }} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button style={{ marginLeft: '30px' }} variant='primary'>
                  Click For Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default App
