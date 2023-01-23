import Card from 'react-bootstrap/Card';
import "./Cards.css"

function ReviewCard({review}) {
  return (
    <Card className="reviewCards mx-5" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-dark'>
          Rating: {review.rating} 
          </Card.Title>
        <Card.Subtitle className="text-dark">Posted: {review.date}</Card.Subtitle>
        <Card.Text className='text-dark'>
          {review.message}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default ReviewCard;