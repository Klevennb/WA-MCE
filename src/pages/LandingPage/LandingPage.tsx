import { Welcome } from 'components/Welcome';
import { FC } from 'react';
// import { useSelector } from "react-redux";

const LandingPage: FC = () => {
  //   const user = useSelector((state: any) => state.user);

  return (
    <div>
      <Welcome />
    </div>
  );
};

export default LandingPage;
