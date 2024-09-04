'use client';

import React, { useState, useContext, createContext } from 'react';

import { AlertProps } from '@mui/material/Alert';

type ToastsContextType = {
  toastRef: React.RefObject<AlertProps> | null;
  setToastRef: (ref: React.RefObject<AlertProps> | null) => void;
};

const ToastsContext = createContext<ToastsContextType | undefined>(undefined);

type Props = {
  children?: React.ReactNode;
};

export const ToastsProvider = ({ children }: Props) => {
  const [toastRef, setToastRef] = useState<React.RefObject<AlertProps> | null>(null);

	const value = React.useMemo(() => ({ toastRef, setToastRef }), [toastRef]);

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
};

export const useToasts = () => useContext(ToastsContext);
