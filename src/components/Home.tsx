import { Container, Row, Col } from "react-bootstrap";
import Notizia from "./Notizia";
import { News } from "../interfaces/INotizia";
import { useEffect, useState } from "react";
const Home = () => {
  const [notizie, setNotizie] = useState<News[]>([]);
  const URL = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchNews = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setNotizie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <Container>
      <Row xs={2} md={4} lg={5}>
        {notizie.map(notizia => (
          <Col key={notizia.id}>
            <Notizia imageUrl={notizia.imageUrl} title={notizia.title} newSite={notizia.newsSite} id={notizia.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
