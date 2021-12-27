import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { localDate } from "../../components/newsCard/utils";

const DetailNews = () => {
  let { state } = useLocation();

  return (
    <>
      <Container>
        <div className="d-flex-column justify-content-center mt-5">
          <h2>{state.title}</h2>
          <div className="d-flex justify-content-between w-50">
            <p>
              <b>{localDate(state.publishedAt)}</b>
            </p>
            <p>
              <b>{state.author} </b>
            </p>
          </div>
          <div>
            <img
              src={state.urlToImage}
              alt=""
              className="w-50"
              style={{ minHeight: "300px" }}
            />
            <p>{state.content}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailNews;
