import React from 'react';

const Building = () => {
  return (
    <svg width="200" height="400" xmlns="http://www.w3.org/2000/svg">
      {/* Building base */}
      <rect x="100" y="200" width="100" height="200" fill="gray" />

      {/* Windows */}
      <rect x="60" y="220" width="20" height="20" fill="lightblue" />
      <rect x="80" y="220" width="20" height="20" fill="lightblue" />
      <rect x="60" y="240" width="20" height="20" fill="lightblue" />
      <rect x="80" y="240" width="20" height="40" fill="blue" />

      {/* Door */}
      <rect x="75" y="320" width="50" height="80" fill="brown" />
    </svg>
  );
};

export default Building;
