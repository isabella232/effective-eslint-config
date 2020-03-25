import { configs } from "@typescript-eslint/eslint-plugin"

export const blockedByTS = Object.keys(configs["eslint-recommended"].overrides[0].rules)
export const replacedByTS = Object.keys(configs.recommended.rules).filter((name) => !name.startsWith("@typescript-eslint"))

export const blacklist = new Set([ ...blockedByTS, ...replacedByTS ])

export function isDisabled(value: any) {
  if (value == null) {
    return true
  }

  const toggle = Array.isArray(value) ? value[0] : value
  return toggle === "off"
}