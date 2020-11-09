import React from 'react';
import { useDispatch } from 'react-redux';
import { Button as AntDBtn } from 'antd';

const useButton = (onClick) => {
    const dispatch = useDispatch();
    return onClick && onClick.name
        ? payload => dispatch({ type: onClick.name, payload })
        : () => null;
};

const Button = ({
    label,
    payload,
    onClick,
    ...props
}) => {
    const handleClick = useButton(onClick);
    return (
        <AntDBtn onClick={() => handleClick(payload)} {...props}>{label}</AntDBtn>
    );
};

export default Button;