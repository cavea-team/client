import React from 'react';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: true; // Your some custom prop
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Button: React.FunctionComponent<IProps> = ({
  children,
  ...shared
}) => {
  return <button {...shared}>{children}</button>;
};

Button.defaultProps = {
  type: 'button'
};
