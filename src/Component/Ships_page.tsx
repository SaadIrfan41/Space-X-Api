import React, { Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Loader from './Loader'
import { Link } from 'react-router-dom'

interface proptypes {
  id: string
  name: string
  image: string
  active: boolean
}

const all_ships = gql`
  {
    ships(limit: 8) {
      id
      image
      active
      name
    }
  }
`

const Ships_page = () => {
  const { loading, error, data } = useQuery(all_ships)
  console.log(data)
  if (loading) return <Loader />
  if (error) return <h1>Error : </h1>
  return (
    <Fragment>
      <Container style={{ maxWidth: '1240px' }}>
        <h1 style={{ textAlign: 'center' }}>Space x Ships </h1>

        <Row className='mx-auto'>
          {data.ships.map(({ id, name, image, active }: proptypes) => (
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
                <Card.Img
                  variant='top'
                  src={image}
                  alt='Loading Image'
                  style={{ width: '266.4px', height: '170px' }}
                />

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
                  <Link to={`/ship/${id}`}>
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
    </Fragment>
  )
}

export default Ships_page
