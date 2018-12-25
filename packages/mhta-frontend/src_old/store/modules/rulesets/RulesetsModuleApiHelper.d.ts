import { EffectuatedSetRules, SetRulesForVoter } from "steem-wise-core";
export declare class RulesetsModuleApiHelper {
    private static API;
    static loadRulesets(props: {
        delegator?: string;
        voter?: string;
    }): Promise<EffectuatedSetRules[]>;
    static saveSetRules(srfv: SetRulesForVoter): Promise<{
        id: string;
        block_num: number;
        trx_num: number;
    }>;
}
