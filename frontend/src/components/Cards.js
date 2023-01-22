import Card from 'react-bootstrap/Card';

function TextExample({review}) {
  return (
    <Card className="card0 mx-5" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Rating: {review.rating}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{review.date}</Card.Subtitle>
        <Card.Text>
          {review.message}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default TextExample;