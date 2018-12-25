export declare class DelayedExecutor {
    private delayMs;
    private timeout;
    constructor(delayMs: number);
    execute(fn: () => Promise<void>): void;
}
