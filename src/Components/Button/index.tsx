import { ButtonHTMLAttributes } from 'react';

import './style.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export default function Button({ isOutlined = false, ...props}: ButtonProps){
  return(
    <button className={`button ${isOutlined ? 'outlined' : ''}`}
    {...props}
    />
  );
}