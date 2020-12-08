import React from 'react';
import Link from 'next/link';
import { Button as AntDBtn } from 'antd';
import { ButtonProps as AntDButtonProps } from 'antd/lib/button';

import { IPage } from '../pages/[...page]';

// import useDispatch, { GenericAction } from '../hooks/dispatch';

export type ButtonProps = AntDButtonProps & {
  label: string;
  page?: IPage;
  article?: any;
  href?: string;
  // onClick: GenericAction;
}

const Button: React.FC<ButtonProps> = ({
  label,
  page,
  article,
  href,
  ...props
}) => {
  // const dispatch = useDispatch();
  return (
    // <AntDBtn onClick={dispatch(onClick)} {...props}>{label}</AntDBtn>
    <AntDBtn {...props}>{
      page ? <Link href={page.slug}>{label}</Link> :
      article ? <Link href={`/articles/${article.id}`}>{label}</Link> :
      href ? <Link href={href}>{label}</Link> :
      label
    }</AntDBtn>
  );
};

export default Button;