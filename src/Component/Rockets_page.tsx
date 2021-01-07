import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Loader from './Loader'
import { Link } from 'react-router-dom'

interface proptypes {
  id: string
  name: string
  active: Boolean
  company: string
}

const all_rockets = gql`
  {
    rockets(limit: 20) {
      active
      company
      id
      name
    }
  }
`

const Rockets_page = () => {
  const { loading, error, data } = useQuery(all_rockets)

  if (loading) return <Loader />
  if (error) return <h1>Error : </h1>

  return (
    <Container style={{ maxWidth: '1240px', marginTop: '60px' }}>
      <Row className='mx-auto '>
        {data.rockets.map(({ id, name, active, company }: proptypes) => (
          <Col key={id} sm={12} md={6} lg={4} xl={3}>
            <Card
              className='mx-auto'
              style={{
                width: '18rem',
                padding: '10px',
                marginTop: '10px',
                marginBottom: '25px',
              }}
            >
              <Card.Title
                style={{
                  textAlign: 'center',
                }}
              >
                <>
                  <h5>Rocket Name:</h5> {name}
                </>
              </Card.Title>

              <Card.Body>
                <Card.Text>
                  <Card.Title
                    style={{
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }}
                  >
                    Active: {JSON.stringify(active)}
                  </Card.Title>
                </Card.Text>
                <Link to={`/rocket/${id}`}>
                  <Button style={{ marginLeft: '30px' }} variant='primary'>
                    Click For Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Rockets_page
