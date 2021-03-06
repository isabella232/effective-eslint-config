import { Linter } from "eslint"
import { configs, rules as tsrules } from "@typescript-eslint/eslint-plugin"

import { ESLintRules } from "./types"

const DEBUG_ESLINT = process.env.DEBUG_ESLINT

const eslintRecommendedBlocked: string[] = []
const eslintRecommendedOverrides = configs["eslint-recommended"].overrides[0].rules

for (const rule in eslintRecommendedOverrides) {
  if (eslintRecommendedOverrides[rule] === "off") {
    eslintRecommendedBlocked.push(rule)
  }
}

export const tsRecommendedReplaced = Object.keys(configs.recommended.rules).filter(
  (name) => !name.startsWith("@typescript-eslint")
)

export const blacklist = new Set([ ...eslintRecommendedBlocked, ...tsRecommendedReplaced ])

export function hasMatchingTypescriptRule(name: string): boolean {
  return !!tsrules[name]
}

export function filterWithBlacklist(rules: ESLintRules): ESLintRules {
  const result: ESLintRules = {}

  for (let rule in rules) {
    if (!blacklist.has(rule)) {
      result[rule] = rules[rule]
    } else if (DEBUG_ESLINT) {
      // console.log(`Rule ${rule} was filtered by blacklist!`)
    }
  }

  return result
}

export function setLevel(value: any, newLevel: Linter.RuleLevel | Linter.RuleLevelAndOptions) {
  if (Array.isArray(value)) {
    const newValue = [ ...value ]
    newValue[0] = newLevel
    return newValue
  }
  if (value != null) {
    return newLevel
  }

  return value
}

export function getLevel(value: any) {
  if (!value) {
    return "off"
  }

  return Array.isArray(value) ? value[0] : value
}

const levelMap = {
  0: "off",
  1: "warn",
  2: "error"
}

export function humanifyLevel(value: any) {
  const oldLevel = getLevel(value)
  if (typeof oldLevel === "string") {
    return value
  }

  const newLevel = levelMap[oldLevel]
  return newLevel ? setLevel(value, levelMap[oldLevel]) : value
}

export function isDisabled(value: any) {
  if (value == null) {
    return true
  }

  return getLevel(value) === "off"
}
