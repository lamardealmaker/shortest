import type { Expect } from "expect";
import type { TestFunction, TestHookFunction } from "./test";

export interface ShortestGlobals {
  expect: Expect;
  registry: {
    tests: Map<string, TestFunction[]>;
    beforeAllFns: TestHookFunction[];
    afterAllFns: TestHookFunction[];
    beforeEachFns: TestHookFunction[];
    afterEachFns: TestHookFunction[];
  };
}
