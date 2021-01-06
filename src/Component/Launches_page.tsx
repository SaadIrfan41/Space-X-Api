import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Loader from './Loader'
import { Link } from 'react-router-dom'

interface proptypes {
  id: string
  mission_name: string
  launch_success: Boolean
}

const all_launches = gql`
  {
    launchesPast(limit: 20) {
      id
      mission_name
      launch_success
    }
  }
`

const Launches_page = () => {
  const { loading, error, data } = useQuery(all_launches)

  if (loading) return <Loader />
  if (error) return <h1>Error : </h1>

  return (
    <Container style={{ maxWidth: '1240px', marginTop: '60px' }}>
      <Row className='mx-auto '>
        {data.launchesPast.map(
          ({ id, mission_name, launch_success }: proptypes) => (
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
                    <h5>Mission Name:</h5> {mission_name}
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
                      Launch Success: {JSON.stringify(launch_success)}
                    </Card.Title>
                  </Card.Text>
                  <Link to={`/launch/${id}`}>
                    <Button style={{ marginLeft: '30px' }} variant='primary'>
                      Click For Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}

export default Launches_page
