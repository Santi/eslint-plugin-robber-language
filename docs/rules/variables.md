# robber-language/variables

Checks that all variable declarations are correctly spelled in robber language

## Rule Details

This rule aims to provide consistent naming of variables according to the
definition of Robber Language.

Examples of **incorrect** code for this rule:

```js
var foo;
let foo;
const foo = 'bar';
```

Examples of **correct** code for this rule:

```js
var fofoo;
let fofoo;
const fofoo = 'bar';
```

## When Not To Use It

If you want lines with less than 200 characters, it could be a good idea to
turn off this rule...

## Further Reading

* [Wikipedia article on Robber Language](https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket)
* [Wikipedia article on Astrid Lindgren](https://en.wikipedia.org/wiki/Astrid_Lindgren)
* [Wikipedia article on Kalle Blomkvist (Bill Bergson)](https://en.wikipedia.org/wiki/Bill_Bergson)
