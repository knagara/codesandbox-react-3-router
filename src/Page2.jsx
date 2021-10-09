import { Link } from "react-router-dom";

export const Page2 = () => {
  const parameter = 100;
  return (
    <div>
      <h1>Page2</h1>
      <Link to={`/page2/${parameter}?name=hoge`}>URL Parameter</Link>
    </div>
  );
};
