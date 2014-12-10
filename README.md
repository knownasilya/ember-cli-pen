# ember-cli-pen

Use the [Pen] editor with Ember via `{{pen-editor}}`.

## Available Options

```js
var ENV = {
  APP: {},

  'ember-cli-pen': {
    defaultList: [
      'blockquote', 'h2', 'h3', 'p', 'pre',
      'insertorderedlist', 'insertunorderedlist',
      'indent', 'outdent',
      'bold', 'italic', 'underline',
      'createlink', 'inserthorizontalrule'
    ],
    markdown: true,
    debug: false
  }
};
```

* `defaultList` - The tool list to use by default, otherwise pass in as `{{pen-editor list=myList}}`.
* `markdown` - Enables markdown, `false` by default. Enabling this adds a markdown.js to the build.
* `debug` - Allows for debugging the Pen editor, `false` by default.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[Pen]: https://github.com/sofish/pen
