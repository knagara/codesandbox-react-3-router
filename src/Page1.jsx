import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to={{ pathname: "/page1/detailB", state: arr }}>DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
