import { useContext } from "react";
import {
  Card,
  CardBody,
  Button,
  CardSubtitle,
  CardTitle,
  CardText,
  Col,
  CardImg,
} from "reactstrap";
import { NewsContext } from "../../context/context";
import { INews } from "../../interface/index";
import { localDate } from "./utils";
import { useHistory } from "react-router-dom";

const NewsCard = () => {
  const { newsState } = useContext(NewsContext);
  const history = useHistory();

  const handleOnClick = (title: string, item: INews) => {
    history.push(`/detail/${title}`, item);
  };

  return (
    <>
      {newsState.data.map((item: INews, i: number) => (
        <Col md="4" key={i} className="mb-4">
          <Card color="light">
            <CardBody style={{ height: "500px" }}>
              <div
                style={{
                  height: "85%",
                  overflow: "hidden",
                }}
              >
                <CardImg
                  src={item.urlToImage}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    minHeight: "200px",
                  }}
                />
                <CardTitle className="mt-2" tag="h5">
                  {item.title}
                </CardTitle>
                <div className="d-flex justify-content-between mt-2">
                  <CardSubtitle className="mb-3 text-muted" tag="h6">
                    {localDate(item.publishedAt)}
                  </CardSubtitle>
                  <CardSubtitle className="mb-3 text-muted" tag="h6">
                    {item.author}
                  </CardSubtitle>
                </div>
                <CardText>{item.description}</CardText>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <Button onClick={() => handleOnClick(item.title, item)}>
                  Detail
                </Button>
                <CardText>{item.source.name}</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default NewsCard;
