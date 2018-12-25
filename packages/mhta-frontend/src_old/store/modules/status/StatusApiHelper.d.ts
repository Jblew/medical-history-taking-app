import { EffectuatedWiseOperation } from "steem-wise-core";
export declare class StatusApiHelper {
    private static WITNESS_ACCOUNT;
    private static ENDPOINT_URL;
    private static STEEM;
    static loadGeneralStats(): Promise<{
        operations: number;
        delegators: number;
        voters: number;
    }>;
    static isVoting(accountName: string): Promise<boolean>;
    static isDelegating(accountName: string): Promise<boolean>;
    static isSupporting(accountName: string): Promise<boolean>;
    static loadLatestOperations(limit?: number): Promise<EffectuatedWiseOperation[]>;
}
