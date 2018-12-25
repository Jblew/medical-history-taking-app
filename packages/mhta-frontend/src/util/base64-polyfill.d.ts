/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info
*
**/
export declare class Base64 {
    private static _keyStr;
    static encode(input: string): string;
    static decode(input: string): string;
    private static _utf8_encode;
    private static _utf8_decode;
}
