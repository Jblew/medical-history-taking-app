import { User, UserSettings } from "./User";
export declare class AuthModuleApiHelper {
    static accountExists(username: string): Promise<boolean>;
    static getLoginUrl(scope: AuthModuleApiHelper.LoginScope): string;
    static getUser(): Promise<User | false>;
    static saveUserSettings(settings: UserSettings): Promise<void>;
    static logout(): Promise<void>;
}
export declare namespace AuthModuleApiHelper {
    type LoginScope = string;
    const LoginScope_EMPTY: LoginScope;
    const LoginScope_CUSTOM_JSON: LoginScope;
    const LoginScope_CUSTOM_JSON_VOTE_OFFLINE: LoginScope;
    const scopes: string[];
}
