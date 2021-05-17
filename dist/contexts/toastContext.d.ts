import React from 'react';
export interface ToastMessage {
    text: string;
    duration: number;
}
export interface ToastContextProps {
    showToast: (text: any, duration: any) => void;
}
declare const ToastContext: React.Context<ToastContextProps>;
declare const ToastContextProvider: ({ children }: {
    children: any;
}) => JSX.Element;
declare const withToast: (Component: any) => (props: any) => JSX.Element;
export default ToastContext;
export { ToastContextProvider, withToast };
