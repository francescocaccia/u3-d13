import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsProps } from "../interfaces/INotizia";

const Notizia = ({ imageUrl, title, newSite, id }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{newSite}</Card.Text>
        <Button onClick={() => navigate(`/detail/${id}`)} variant="primary">
          Scopri di Più
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Notizia;
