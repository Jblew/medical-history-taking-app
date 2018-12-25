import { NormalizedRulesets } from "./NormalizedRulesets";
export declare namespace RulesetsModule {
    const modulePathName = "rulesets";
    function localName(name: string): string;
    interface State {
        loading: boolean;
        error: string | "";
        loadedFor: string;
        delegator?: string;
        voter?: string;
        backupNormalizedRulesets: NormalizedRulesets.Result;
        normalizedRulesets: NormalizedRulesets.Result;
        edit: {
            rulesetId: string;
            backup?: NormalizedRulesets.NormalizedRuleset;
            modified: boolean;
        };
        publish: {
            loading: boolean;
            error: string;
            result: string;
            for: string;
        };
    }
    function validateState(state: State): void;
    class Actions {
        static reloadRulesets: string;
        static setVoterAndOrDelegator: string;
        static addRuleToRuleset: string;
        static updateRule: string;
        static deleteRule: string;
        static addRulesetToSetRules: string;
        static renameRuleset: string;
        static deleteRuleset: string;
        static saveChanges: string;
        static revertChanges: string;
        static beginRulesetEdit: string;
    }
    class Getters {
        static isSetRulesModified: string;
    }
}
