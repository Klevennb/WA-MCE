import React from 'react';

interface Props {
  thickness?: number;
  height?: number;
  variant?: 'gray' | 'red' | 'green' | 'blue' | 'darkGray'; // added 'variant' prop
}

const LineBreak: React.FC<Props> = ({
  thickness = 1,
  height = 10,
  variant = 'gray',
}) => {
  const colors = {
    // define color map
    gray: '#D1D5DB',
    red: '#EF4444',
    green: '#22C55E',
    blue: '#3B82F6',
    darkGray: '#212121',
  };

  const style = {
    height: `${height}px`,
    borderBottom: `${thickness}px solid ${colors[variant]}`, // use color map based on variant prop
  };

  return <div style={style} />;
};

export default LineBreak;
