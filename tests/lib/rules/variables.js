/**
 * @fileoverview Checks that all variable declarations are correctly spelled in robber language
 * @author Vemund Santi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/variables"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("variables", rule, {
  valid: [
    "var fofoo;",
    "var fofoo, bobaror;",
    "let fofoo;",
    "let fofoo, bobaror;",
    "const fofoo = 'bar';"
  ],

  invalid: [
    {
      code: "var foo;",
      errors: [
        {
          message: "Variable name must be in robber language.",
          type: "VariableDeclaration"
        }
      ]
    },
    {
      code: "let foo;",
      errors: [
        {
          message: "Variable name must be in robber language.",
          type: "VariableDeclaration"
        }
      ]
    },
    {
      code: "const foo = 'bar';",
      errors: [
        {
          message: "Variable name must be in robber language.",
          type: "VariableDeclaration"
        }
      ]
    }
  ]
});
