// src/hooks/useUser.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { fetchUser } from '../store/slices/user.slice.js';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  return { user, loading, error };
};
