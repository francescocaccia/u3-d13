import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { News } from "../interfaces/INotizia";
import { useEffect, useState } from "react";

const Detail = () => {
  const params = useParams();
  const [notizia, setNotizia] = useState<News | null>(null);
  const endpoint = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`;

  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setNotizia(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="pt-5 d-flex flex-column justify-content-center align-items-center text-center">
      {notizia && (
        <>
          <img src={notizia.imageUrl} className="img-fluid" alt="id" />
          <h1 className="display-1">{notizia.title}</h1>
          <p className="display-6">{notizia.newsSite}</p>
          <p>{notizia.summary}</p>
        </>
      )}
    </Container>
  );
};

export default Detail;
