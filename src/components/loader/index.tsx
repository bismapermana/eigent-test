import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Spinner color="secondary" type="border">
        Loading...
      </Spinner>
    </div>
  );
};

export default Loader;
