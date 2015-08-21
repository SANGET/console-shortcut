# console-shortcut
------------------
Shortcut of javascript's console.
For the people which tired of writing tedious console to debug in browser.

## Usage
Just included the file into your project

```
<script src="yourPath/bower_components/console-shortcut/console-shortcut.js"></script>
```

And than you can use console like below:

```
csl.l('stuff');
```

## shortcut mapping
```
{
  'l': 'log',
  'd': 'dir',
  'dg': 'debug',
  'i': 'info',
  'e': 'error',
  'w': 'warn',
  'c': 'count',
  'tb': 'table',
  't': 'time',
  'te': 'timeEnd',
  'tc': 'trace',
  'cl': 'clear',
  'a': 'assert'
}
```

## TODO
- Support node
- Support customize
