import { Ruleset, Rule, SetRules, SetRulesForVoter } from "steem-wise-core";
export declare class NormalizedRulesets {
    private idIncrementer;
    private setRulesArraySchema;
    private rulesetSchema;
    constructor();
    normalize(setRArray: SetRules[]): NormalizedRulesets.Result;
    denormalizeSetRules(setRulesIds: string[], normalized: NormalizedRulesets.Result): SetRulesForVoter[];
    denormalizeRulesets(rulesetIds: string[], normalized: NormalizedRulesets.Result): Ruleset[];
    genIdForRule(): string;
    genIdForRuleset(): string;
    getIdForSetRules(): string;
}
export declare namespace NormalizedRulesets {
    type ID = string;
    interface NormalizedRule extends Rule {
        id: ID;
    }
    namespace NormalizedRule {
        function validate(rule: NormalizedRule): void;
    }
    interface NormalizedRuleset {
        id: ID;
        name: string;
        rules: ID[];
    }
    namespace NormalizedRuleset {
        function validate(ruleset: NormalizedRuleset): void;
    }
    interface NormalizedSetRulesForVoter {
        id: ID;
        voter: string;
        delegator: string;
        rulesets: ID[];
    }
    namespace NormalizedSetRulesForVoter {
        function validate(srfv: NormalizedSetRulesForVoter): void;
    }
    interface Result {
        result: ID[];
        entities: {
            rules: {
                [key: string]: NormalizedRule;
            };
            rulesets: {
                [key: string]: NormalizedRuleset;
            };
            setRules: {
                [key: string]: NormalizedSetRulesForVoter;
            };
        };
    }
    namespace Result {
        function validate(result: Result): void;
    }
}
