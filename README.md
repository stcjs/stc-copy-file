# stc-copy-file

Stc plugin for copying file

## Install

```sh
npm install stc-copy-file
```

## How to use

```
var stccopyfile = require('stc-copy-file');
stccopyfile: {
    plugin: stccopyfile,
    include: /resource\/abd\/.*\.js$/, options: {
      dest: function(source){
        var target = '/copy/'+source;
        return target;
      }
    }
  }
```

##dest 可以为字符串或者function:
* 1.当dest为字符串时,新路径targetPath为path.join(this.options.dest, this.file.path);
* 2.当dest为function时，新路径targetPath为function的返回值
* 注：targetPath会经过stc-plugin getResolvePath方法处理

