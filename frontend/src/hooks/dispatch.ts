import { SyntheticEvent } from 'react';
import { useDispatch as ReactReduxUseDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { isEmpty } from '../utils/object';

export type GenericAction = {
  type: string;
  payload?: any;
}

const useDispatch = () => {
  const dispatch = ReactReduxUseDispatch();
  const router = useRouter();

  return (action: GenericAction) => {
    if (isEmpty(action)) return () => { };

    return (event: SyntheticEvent): void => {
      event.preventDefault();

      const { type, payload } = action;
      if (type === 'NAVIGATE_TO' && payload && payload.page) {
        router.push(action.payload.page);
      } else {
        dispatch({ type, payload });
      }
    };
  };
};

export default useDispatch;