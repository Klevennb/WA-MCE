import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  type?: 'button' | 'submit';
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  type = 'button',
}) => {
  let variantClasses = '';
  let variantColor = '';

  switch (variant) {
    case 'secondary':
      variantClasses = 'bg-gray-300 hover:bg-gray-400';
      variantColor = '#8A716A';
      break;
    case 'tertiary':
      variantClasses = 'bg-indigo-300 hover:bg-indigo-400';
      variantColor = '#C2B8B2';
      break;
    case 'outlined':
      variantClasses =
        'bg-white text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-white';
      variantColor = 'gray-300';
      break;
    default:
      variantClasses = 'bg-blue-300 hover:bg-blue-400';
      variantColor = '#F9EBE0';
  }

  return (
    <div>
      <button
        onClick={onClick}
        className={`text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${variantClasses}`}
        style={{ background: variantColor, width: '150px' }}
        // Use a static string value for the type attribute
        type={type === 'button' ? 'button' : 'submit'}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
