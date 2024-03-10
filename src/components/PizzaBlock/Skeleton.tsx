import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="135" r="125" />
    <rect x="0" y="280" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="325" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="435" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="425" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
