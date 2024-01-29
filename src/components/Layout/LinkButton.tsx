import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonColor } from 'src/types/ColorTypes.ts';

interface Props {
    to: string,
    label: string,
    color: ButtonColor,
}

const LinkButton: React.FC<Props> = ({ to, label, color }) => (
  <Link to={to} className={`p-4 m-4 text-white ${color} rounded-md`}>
    {label}
  </Link>
);

export default LinkButton;
