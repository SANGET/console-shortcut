;(function (_window) {
  var consoleMethodsMap = {
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
  };
  _window.csl = console;
  for (var key in consoleMethodsMap) {
    _window.csl[key] = console[consoleMethodsMap[key]].bind(console);
  }
  _window.log = console.log.bind(console);
})(window);
