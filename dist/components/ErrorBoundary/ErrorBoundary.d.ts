import React from 'react';
interface LocalProps {
}
interface LocalState {
    hasError: boolean;
}
declare class ErrorBoundary extends React.Component<LocalProps, LocalState> {
    constructor(props: LocalProps);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): React.ReactNode;
}
export { ErrorBoundary };
