# stc-copy-file

Stc plugin for copying file

## Install

```sh
npm install stc-copy-file
```

## How to use

```
var stccopyfile = require('stc-copy-file');
stc.workflow({
  stccopyfile: {
    plugin: stccopyfile,
    include: /resource\/abc\/.*\.js$/, options: {
      dest: function(source){
        var target = 'test/'+source;
        return target;
      }
    }
  }
});
```

##dest 可以为字符串或者function:
* 1.当dest为字符串时新路径为path.join(this.options.dest, this.file.path);
* 2.当dest为function时，新路径为function的返回值

