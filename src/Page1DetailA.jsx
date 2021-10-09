import { useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
