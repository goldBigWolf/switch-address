import './iconfont';
interface IInput {
    color?: string;
    address: {
        [name: string]: string;
    };
    default?: string;
    exclude?: string | string[];
}
export default class SwitchAddress {
    env: string;
    address: string;
    constructor(data: IInput);
    private verify;
    private createStyle;
    private createElement;
    private selectAddressClass;
    private isSpecialEnv;
}
export {};
