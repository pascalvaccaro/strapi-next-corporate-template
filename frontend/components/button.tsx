import React from 'react';
import { Button as AntDBtn } from 'antd';
import { ButtonProps as AntDButtonProps } from 'antd/lib/button';

import useDispatch, { GenericAction } from '../hooks/dispatch';

export type ButtonProps = Omit<AntDButtonProps, 'onClick'> & {
    label: string;
    onClick: GenericAction;
}

const Button = ({
    label,
    onClick,
    ...props
}: ButtonProps) => {
    const dispatch = useDispatch();
    return (
        <AntDBtn onClick={dispatch(onClick)} {...props}>{label}</AntDBtn>
    );
};

export default Button;