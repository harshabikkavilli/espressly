'use client';

import { AlertProps } from '@mui/material/Alert';
import React, { createContext, useContext, useState } from 'react';

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

  return (
    <ToastsContext.Provider value={{ toastRef, setToastRef }}>{children}</ToastsContext.Provider>
  );
};

export const useToasts = () => useContext(ToastsContext);
