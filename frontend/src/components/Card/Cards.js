import Card from 'react-bootstrap/Card';
import "./Cards.css"

function ReviewCard({review}) {
  return (
    <Card className="reviewCards mx-5" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          Rating: {review.rating} 
          </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Posted: {review.date}</Card.Subtitle>
        <Card.Text>
          {review.message}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default ReviewCard;