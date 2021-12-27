import { useContext, useEffect } from "react";
import { API } from "../../config/API";
import { NewsContext } from "../../context/context";
import Loader from "../../components/loader/index";
import NewsCard from "../../components/newsCard/index";
import { Container, Row } from "reactstrap";

const Home = () => {
  const { newsState, newsDispatch } = useContext(NewsContext);

  useEffect(() => {
    API.get("/top-headlines?country=us&apiKey=ffce440df04547978bdcfa71c2ba18ca")
      .then((response) => {
        newsDispatch({
          type: "FETCH_SUCCESS",
          payload: response.data.articles,
        });
      })
      .catch((error) => {
        newsDispatch({
          type: "FETCH_FAILED",
          payload: error.message,
        });
      });
  }, [newsDispatch]);

  if (newsState.isLoading) {
    return <Loader />;
  }

  if (newsState.isError) {
    return <p>{newsState.message}</p>;
  }

  return (
    <div>
      <Container className="my-5">
        <Row>
          <NewsCard />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
