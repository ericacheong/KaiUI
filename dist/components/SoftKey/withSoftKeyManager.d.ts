/// <reference types="react" />
import { SoftKeyContextProps } from './SoftKeyProvider';
export interface SoftKeyManagerProps {
    softKeyManager: SoftKeyContextProps;
}
export declare const SoftKeyConsumer: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const withSoftKeyManager: (Comp: any) => (props: any) => JSX.Element;
