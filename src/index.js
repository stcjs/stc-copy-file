import Plugin from 'stc-plugin';
import {extend, isArray, isFunction, isString} from 'stc-helper';
import path from 'path';

/**
 * Copy file
 */
export default class CopyFilePlugin extends Plugin {
  /**
   * run
   */
  async run(){
  }
  /**
   * update
   */
  update(data){
    var targetPath;
    if(!this.options.dest) {
      this.fatal('StcCopyFile plugin must have dest config');
      return;
    }
    if(isFunction(this.options.dest)) {
      if(!this.options.dest(this.file.path)){
        this.fatal('StcCopyFile plugin dest function must return a path string');
        return;
      }
      targetPath = this.options.dest(this.file.path);
    }else if(isString(this.options.dest)) {
      targetPath = path.join(this.options.dest, this.file.path);
    }
    this.file.path = targetPath;
  }
  /**
   * use cluster
   */
  static cluster(){
    return false;
  }
  /**
   * enable cache
   */
  static cache(){
    return false;
  }
  /**
   * set default include file
   */
   static include() {
     return /\.*$/i;
   }
}
