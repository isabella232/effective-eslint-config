import { ESLintRules } from "../types"

const MAX_COMPLEXITY = 11

// This is the extract generated by diffing the eslint config result
// from *best practises* and *errors* to our base config.
export const essential: ESLintRules = {
  "array-callback-return": [
    "error",
    {
      allowImplicit: true
    }
  ],
  "block-scoped-var": "error",
  complexity: [ "warn", MAX_COMPLEXITY ],
  "consistent-return": "warn",
  curly: [ "error", "multi-line" ],
  "dot-notation": [
    "error",
    {
      allowKeywords: true,
      allowPattern: ""
    }
  ],
  eqeqeq: [ "error", "smart" ],
  "getter-return": [
    "error",
    {
      allowImplicit: true
    }
  ],
  "guard-for-in": "error",
  "no-alert": "error",
  "no-await-in-loop": "error",
  "no-floating-decimal": "error",
  "no-global-assign": [
    "error",
    {
      exceptions: []
    }
  ],
  "no-multi-spaces": [
    "error",
    {
      ignoreEOLComments: false
    }
  ],
  "no-new": "error",
  "no-proto": "error",
  "no-restricted-properties": [
    "error",
    {
      message: "arguments.callee is deprecated",
      object: "arguments",
      property: "callee"
    },
    {
      message: "Please use Number.isFinite instead",
      object: "global",
      property: "isFinite"
    },
    {
      message: "Please use Number.isFinite instead",
      object: "self",
      property: "isFinite"
    },
    {
      message: "Please use Number.isFinite instead",
      object: "window",
      property: "isFinite"
    },
    {
      message: "Please use Number.isNaN instead",
      object: "global",
      property: "isNaN"
    },
    {
      message: "Please use Number.isNaN instead",
      object: "self",
      property: "isNaN"
    },
    {
      message: "Please use Number.isNaN instead",
      object: "window",
      property: "isNaN"
    },
    {
      message: "Please use Object.defineProperty instead.",
      property: "__defineGetter__"
    },
    {
      message: "Please use Object.defineProperty instead.",
      property: "__defineSetter__"
    },
    {
      message: "Use the exponentiation operator (**) instead.",
      object: "Math",
      property: "pow"
    }
  ],
  "no-return-assign": [ "error", "always" ],
  "no-return-await": "error",
  "no-self-assign": [
    "error",
    {
      props: false
    }
  ],
  "no-useless-return": "error",
  "no-void": "error",
  "prefer-promise-reject-errors": [
    "error",
    {
      allowEmptyReject: true
    }
  ],
  radix: "error",
  strict: [ "error", "never" ],
  "valid-typeof": [
    "error",
    {
      requireStringLiterals: true
    }
  ],
  "wrap-iife": [
    "error",
    "outside",
    {
      functionPrototypeMethods: false
    }
  ],
  yoda: "error"
}

export const es2015: ESLintRules = {
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false
    }
  ],
  "arrow-spacing": [
    "error",
    {
      before: true,
      after: true
    }
  ],
  "generator-star-spacing": [
    "error",
    {
      before: false,
      after: true
    }
  ],
  "no-confusing-arrow": [
    "error",
    {
      allowParens: true
    }
  ],
  "no-var": "error",
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true
    }
  ],
  "prefer-arrow-callback": [
    "warn",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  "prefer-const": [
    "warn",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true
    }
  ],
  "prefer-numeric-literals": "error",
  "prefer-rest-params": "warn",
  "prefer-spread": "warn",
  "prefer-template": "warn",
  "symbol-description": "error",
  "template-curly-spacing": "error",
  "yield-star-spacing": [ "error", "after" ]
}

export const imports: ESLintRules = {
  "import/no-absolute-path": "error",
  "import/no-duplicates": "error",
  "import/no-dynamic-require": "error",
  "import/no-mutable-exports": "error",
  // Note: Disabled as it conflicts with some typical HOC usage.
  // 'import/no-named-as-default': 'error',
  "import/no-named-as-default-member": "error",
  "import/no-named-default": "error",
  "import/no-self-import": "error",
  "import/no-useless-path-segments": "error"
}

export const node: ESLintRules = {
  // require all requires be top-level
  // https://eslint.org/docs/rules/global-require
  "global-require": "error",

  // disallow use of the Buffer() constructor
  // https://eslint.org/docs/rules/no-buffer-constructor
  "no-buffer-constructor": "error",

  // disallow use of new operator with the require function
  "no-new-require": "error",

  // disallow string concatenation with __dirname and __filename
  // https://eslint.org/docs/rules/no-path-concat
  "no-path-concat": "error"
}

export const variables: ESLintRules = {
  "no-shadow": "error",

  // disallow use of undefined when initializing variables
  "no-undef-init": "error"
}

export const react: ESLintRules = {
  "jsx-a11y/label-has-associated-control": [ "error" ],
  "jsx-a11y/lang": "error",
  "react/button-has-type": [
    "error",
    {
      button: true,
      reset: false,
      submit: true
    }
  ],
  "react/default-props-match-prop-types": [
    "error",
    {
      allowRequiredDefaults: false
    }
  ],
  "react/destructuring-assignment": [ "error", "always" ],
  "react/forbid-prop-types": [
    "error",
    {
      checkChildContextTypes: true,
      checkContextTypes: true,
      forbid: [ "any", "array", "object" ]
    }
  ],
  "react/jsx-boolean-value": [
    "error",
    "never",
    {
      always: []
    }
  ],
  "react/jsx-closing-bracket-location": [ "error", "line-aligned" ],
  "react/jsx-closing-tag-location": "error",
  "react/jsx-curly-brace-presence": [
    "error",
    {
      children: "never",
      props: "never"
    }
  ],
  "react/jsx-curly-spacing": [
    "error",
    "never",
    {
      allowMultiline: true
    }
  ],
  "react/jsx-equals-spacing": [ "error", "never" ],
  "react/jsx-first-prop-new-line": [ "error", "multiline-multiprop" ],
  "react/jsx-max-props-per-line": [
    "error",
    {
      maximum: 1,
      when: "multiline"
    }
  ],
  "react/jsx-no-bind": [
    "error",
    {
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false,
      ignoreDOMComponents: true,
      ignoreRefs: true
    }
  ],
  "react/jsx-no-target-blank": [
    "error",
    {
      enforceDynamicLinks: "always"
    }
  ],
  "react/jsx-one-expression-per-line": [
    "error",
    {
      allow: "single-child"
    }
  ],
  "react/jsx-props-no-multi-spaces": "error",
  "react/jsx-tag-spacing": [
    "error",
    {
      afterOpening: "never",
      beforeClosing: "never",
      beforeSelfClosing: "always",
      closingSlash: "never"
    }
  ],
  "react/jsx-wrap-multilines": [
    "error",
    {
      arrow: "parens-new-line",
      assignment: "parens-new-line",
      condition: "parens-new-line",
      declaration: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
      return: "parens-new-line"
    }
  ],
  "react/no-access-state-in-setstate": "error",
  "react/no-array-index-key": "error",
  "react/no-danger": "warn",
  "react/no-did-update-set-state": "error",
  "react/no-redundant-should-component-update": "error",
  "react/no-this-in-sfc": "error",
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true
    }
  ],
  "react/no-unused-state": "error",
  "react/no-will-update-set-state": "error",
  "react/prefer-es6-class": [ "error", "always" ],
  "react/prefer-stateless-function": [
    "warn",
    {
      ignorePureComponents: true
    }
  ],
  "react/require-default-props": [
    "error",
    {
      forbidDefaultForRequired: true
    }
  ],
  "react/self-closing-comp": "error",
  "react/void-dom-elements-no-children": "error"
}

export const airbnb = {
  ...es2015,
  ...essential,
  ...imports,
  ...node,
  ...react,
  ...variables
}
