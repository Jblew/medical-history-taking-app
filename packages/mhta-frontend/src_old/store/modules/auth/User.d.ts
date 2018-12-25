import * as steem from "steem";
export interface User {
    account: string;
    profile: undefined | {
        name: string;
        account: steem.AccountInfo;
        user_metadata: any;
    };
    scope: string[];
    settings?: UserSettings;
}
export declare namespace User {
    function validate(user: User): void;
}
export interface UserSettings {
    daemonEnabled: boolean;
}
export declare namespace UserSettings {
    function validate(userSettings: UserSettings): void;
}
/**
 * This is an TS 1.6+ TypeGuard as described here: https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
export declare function isUserSettings(o: object): o is UserSettings;
export declare const defaultUserSettings: {
    daemonEnabled: boolean;
};
