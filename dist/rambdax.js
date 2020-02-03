'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function type(val) {
  const typeOf = typeof val;

  if (val === null) {
    return 'Null';
  } else if (val === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(val) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(val)) {
    return 'Array';
  } else if (val instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = val.toString();

  if (asStr.startsWith('async')) {
    return 'Async';
  } else if (asStr === '[object Promise]') {
    return 'Promise';
  } else if (typeOf === 'function') {
    return 'Function';
  }

  return 'Object';
}

function allTrue(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    const x = inputs[counter];

    if (type(x) === 'Function') {
      if (!inputs[counter]()) {
        return false;
      }
    } else if (!inputs[counter]) {
      return false;
    }

    counter++;
  }

  return true;
}

function allType(targetType) {
  return (...inputs) => {
    let counter = 0;

    while (counter < inputs.length) {
      if (type(inputs[counter]) !== targetType) {
        return false;
      }

      counter++;
    }

    return true;
  };
}

function anyFalse(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    if (!inputs[counter]) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyTrue(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    if (inputs[counter]) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyType(targetType) {
  return (...inputs) => {
    let counter = 0;

    while (counter < inputs.length) {
      if (type(inputs[counter]) === targetType) {
        return true;
      }

      counter++;
    }

    return false;
  };
}

const FUNC_ERROR_TEXT = 'Expected a function';
const HASH_UNDEFINED = '__lodash_hash_undefined__';
const INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;
const funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      symbolTag = '[object Symbol]';
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reEscapeChar = /\\(\\)?/g;
const reIsHostCtor = /^\[object .+?Constructor\]$/;
const reIsUint = /^(?:0|[1-9]\d*)$/;
const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;
const freeSelf = typeof self === 'object' && self && self.Object === Object && self;
const root = freeGlobal || freeSelf || Function('return this')();

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

function isHostObject(value) {
  let result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = Boolean(String(value));
    } catch (e) {}
  }

  return result;
}

const arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;
const coreJsData = root['__core-js_shared__'];

const maskSrcKey = function () {
  const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

const funcToString = funcProto.toString;
const {
  hasOwnProperty
} = objectProto;
const objectToString = objectProto.toString;
const reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
const {
  Symbol
} = root,
      {
  splice
} = arrayProto;
const Map = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');
const symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

function Hash(entries) {
  let index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

function hashGet(key) {
  const data = this.__data__;

  if (nativeCreate) {
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

function hashHas(key) {
  const data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

function hashSet(key, value) {
  const data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function ListCache(entries) {
  let index = -1;
  const length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function listCacheClear() {
  this.__data__ = [];
}

function listCacheDelete(key) {
  const data = this.__data__,
        index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  const lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}

function listCacheGet(key) {
  const data = this.__data__,
        index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
  const data = this.__data__,
        index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

function MapCache(entries) {
  let index = -1;
  const length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash()
  };
}

function mapCacheDelete(key) {
  return getMapData(this, key).delete(key);
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

function assignValue(object, key, value) {
  const objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

function assocIndexOf(array, key) {
  let {
    length
  } = array;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  const pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = isKey(path, object) ? [path] : castPath(path);
  let index = -1;
  let nested = object;
  const {
    length
  } = path;
  const lastIndex = length - 1;

  while (nested != null && ++index < length) {
    let key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      const objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

function baseToString(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

function getMapData(map, key) {
  const data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}

function getNative(object, key) {
  const value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return Boolean(length) && (typeof value === 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  const type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

function isKeyable(value) {
  const type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

function isMasked(func) {
  return Boolean(maskSrcKey) && maskSrcKey in func;
}

var stringToPath = memoize(string => {
  string = toString(string);
  const result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, (match, number, quote, string) => {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return String(func);
    } catch (e) {}
  }

  return '';
}

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    const args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          {
      cache
    } = memoized;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

memoize.Cache = MapCache;

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var {
  isArray
} = Array;

function isFunction(value) {
  const tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

function isObject(value) {
  const type = typeof value;
  return Boolean(value) && (type == 'object' || type == 'function');
}

function isObjectLike(value) {
  return Boolean(value) && typeof value === 'object';
}

function isSymbol(value) {
  return typeof value === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

function toString(value) {
  return value == null ? '' : baseToString(value);
}

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

function whenObject(predicate, input) {
  const yes = {};
  const no = {};
  Object.entries(input).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value;
    } else {
      no[prop] = value;
    }
  });
  return [yes, no];
}

function partition(predicate, input) {
  if (arguments.length === 1) {
    return listHolder => partition(predicate, listHolder);
  }

  if (!Array.isArray(input)) return whenObject(predicate, input);
  const yes = [];
  const no = [];
  let counter = -1;

  while (counter++ < input.length - 1) {
    if (predicate(input[counter], counter)) {
      yes.push(input[counter]);
    } else {
      no.push(input[counter]);
    }
  }

  return [yes, no];
}

const isObject$1 = x => {
  const ok = x !== null && !Array.isArray(x) && typeof x === 'object';

  if (!ok) {
    return false;
  }

  return Object.keys(x).length > 0;
};

function change(origin, pathRaw, rules) {
  const willReturn = JSON.parse(JSON.stringify(origin));

  if (!isObject$1(rules)) {
    set(willReturn, pathRaw, rules);
    return willReturn;
  }

  const path = pathRaw === '' ? '' : `${pathRaw}.`;

  for (const ruleKey of Object.keys(rules)) {
    const rule = rules[ruleKey];

    if (!isObject$1(rule)) {
      set(willReturn, `${path}${ruleKey}`, rule);
      continue;
    }

    const [withObjects, withoutObjects] = partition(subruleKey => isObject$1(rule[subruleKey]), Object.keys(rule));
    withoutObjects.forEach(subruleKey => {
      const subrule = rule[subruleKey];
      set(willReturn, `${path}${ruleKey}.${subruleKey}`, subrule);
    });
    withObjects.forEach(subruleKey => {
      const subrule = rule[subruleKey];
      Object.keys(subrule).forEach(deepKey => {
        const deep = rule[subruleKey][deepKey];

        if (!isObject$1(deep)) {
          return set(willReturn, `${path}${ruleKey}.${subruleKey}.${deepKey}`, deep);
        }

        Object.keys(deep).forEach(superDeepKey => {
          const superDeep = rule[subruleKey][deepKey][superDeepKey];
          set(willReturn, `${path}${ruleKey}.${subruleKey}.${deepKey}.${superDeepKey}`, superDeep);
        });
      });
    });
  }

  return willReturn;
}

function compose(...fns) {
  return (...args) => {
    const list = fns.slice();

    if (list.length > 0) {
      const fn = list.pop();
      let result = fn(...args);

      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }

    return undefined;
  };
}

function last(list) {
  if (typeof list === 'string') return list[list.length - 1] || '';
  return list[list.length - 1];
}

function baseSlice(array, start, end) {
  let index = -1;
  let {
    length
  } = array;
  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

function init(list) {
  if (typeof list === 'string') return list.slice(0, -1);
  return list.length ? baseSlice(list, 0, -1) : [];
}

function composed(...inputs) {
  return compose(...init(inputs))(last(inputs));
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      func.apply(null, input);
    }
  };
}

function defaultToWhen(defaultArgument, fn, ...inputArguments) {
  if (arguments.length === 2) {
    return (...inputArgumentsHolder) => defaultToWhen(defaultArgument, fn, ...inputArgumentsHolder);
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (fn(instance) === true) {
      holder = instance;
      ready = true;
    } else {
      len -= 1;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function findModify(fn, list) {
  if (arguments.length === 1) {
    return listHolder => findModify(fn, listHolder);
  }

  const len = list.length;
  if (len === 0) return false;
  let index = -1;

  while (++index < len) {
    const result = fn(list[index], index);

    if (result !== false) {
      return result;
    }
  }

  return false;
}

function flatMap(fn, xs) {
  if (arguments.length === 1) {
    return xsHolder => flatMap(fn, xsHolder);
  }

  return [].concat(...xs.map(fn));
}

function pick(keys, obj) {
  if (arguments.length === 1) return _obj => pick(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }

    counter++;
  }

  return willReturn;
}

function merge(obj, props) {
  if (arguments.length === 1) return _props => merge(obj, _props);
  return Object.assign({}, obj || {}, props || {});
}

let holder = {};
function getter(key) {
  const typeKey = type(key);
  if (typeKey === 'String') return holder[key];
  if (typeKey === 'Array') return pick(key, holder);
  return holder;
}
function setter(maybeKey, maybeValue) {
  const typeKey = type(maybeKey);
  const typeValue = type(maybeValue);

  if (typeKey === 'String') {
    if (typeValue === 'Function') {
      return holder[maybeKey] = maybeValue(holder[maybeKey]);
    }

    return holder[maybeKey] = maybeValue;
  }

  if (typeKey !== 'Object') return;
  holder = merge(holder, maybeKey);
}
function reset() {
  holder = {};
}

function isFunction$1(fn) {
  return ['Async', 'Promise', 'Function'].includes(type(fn));
}

function isFalsy(x) {
  const typeIs = type(x);
  if (['Array', 'String'].includes(typeIs)) return x.length === 0;
  if (typeIs === 'Object') return Object.keys(x).length === 0;
  if (['Null', 'Undefined'].includes(typeIs)) return true;
  return false;
}

function isPromise(x) {
  return ['Async', 'Promise'].includes(type(x));
}

function isType(xType, x) {
  if (arguments.length === 1) {
    return xHolder => isType(xType, xHolder);
  }

  return type(x) === xType;
}

async function mapAsyncFn(fn, arr) {
  if (Array.isArray(arr)) {
    const willReturn = [];
    let i = 0;

    for (const a of arr) {
      willReturn.push((await fn(a, i++)));
    }

    return willReturn;
  }

  const willReturn = {};

  for (const prop in arr) {
    willReturn[prop] = await fn(arr[prop], prop);
  }

  return willReturn;
}

function mapAsync(fn, arr) {
  if (arguments.length === 1) {
    return async holder => mapAsyncFn(fn, holder);
  }

  return new Promise((resolve, reject) => {
    mapAsyncFn(fn, arr).then(resolve).catch(reject);
  });
}

async function mapFastAsyncFn(fn, arr) {
  const promised = arr.map((a, i) => fn(a, i));
  return Promise.all(promised);
}

function mapFastAsync(fn, arr) {
  if (arguments.length === 1) {
    return async holder => mapFastAsyncFn(fn, holder);
  }

  return new Promise((resolve, reject) => {
    mapFastAsyncFn(fn, arr).then(resolve).catch(reject);
  });
}

function mapObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop, obj);
  }

  return willReturn;
}

function map(fn, list) {
  if (arguments.length === 1) return _list => map(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return mapObject(fn, list);
  }

  let index = -1;
  const len = list.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(list[index], index);
  }

  return willReturn;
}

function replace(pattern, replacer, str) {
  if (replacer === undefined) {
    return (_replacer, _str) => replace(pattern, _replacer, _str);
  } else if (str === undefined) {
    return _str => replace(pattern, replacer, _str);
  }

  return str.replace(pattern, replacer);
}

function sort(fn, list) {
  if (arguments.length === 1) return _list => sort(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort(fn);
}

function take(n, list) {
  if (arguments.length === 1) return _list => take(n, _list);
  if (typeof list === 'string') return list.slice(0, n);
  return baseSlice(list, 0, n);
}

const cache = {};

const normalizeObject = obj => {
  const sortFn = (a, b) => a > b ? 1 : -1;

  const willReturn = {};
  compose(map(prop => willReturn[prop] = obj[prop]), sort(sortFn))(Object.keys(obj));
  return willReturn;
};

const stringify = a => {
  if (type(a) === 'String') {
    return a;
  } else if (['Function', 'Async'].includes(type(a))) {
    const compacted = replace(/\s{1,}/g, ' ', a.toString());
    return replace(/\s/g, '_', take(15, compacted));
  } else if (type(a) === 'Object') {
    return JSON.stringify(normalizeObject(a));
  }

  return JSON.stringify(a);
};

const generateProp = (fn, ...inputArguments) => {
  let propString = '';
  inputArguments.forEach(inputArgument => {
    propString += `${stringify(inputArgument)}_`;
  });
  return `${propString}${stringify(fn)}`;
};

function memoize$1(fn, ...inputArguments) {
  if (arguments.length === 1) {
    return (...inputArgumentsHolder) => memoize$1(fn, ...inputArgumentsHolder);
  }

  const prop = generateProp(fn, ...inputArguments);
  if (prop in cache) return cache[prop];

  if (type(fn) === 'Async') {
    return new Promise(resolve => {
      fn(...inputArguments).then(result => {
        cache[prop] = result;
        resolve(result);
      });
    });
  }

  const result = fn(...inputArguments);
  cache[prop] = result;
  return result;
}

function mergeAll(arr) {
  let willReturn = {};
  map(val => {
    willReturn = merge(willReturn, val);
  }, arr);
  return willReturn;
}

function mergeRight(x, y) {
  return merge(y, x);
}

function mergeDeep(target, source) {
  if (arguments.length === 1) {
    return sourceHolder => mergeDeep(target, sourceHolder);
  }

  const willReturn = JSON.parse(JSON.stringify(target));
  Object.keys(source).forEach(key => {
    if (type(source[key]) === 'Object') {
      if (type(target[key]) === 'Object') {
        willReturn[key] = mergeDeep(target[key], source[key]);
      } else {
        willReturn[key] = source[key];
      }
    } else {
      willReturn[key] = source[key];
    }
  });
  return willReturn;
}

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function onceFn(fn, context) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}

function once(fn, context) {
  if (arguments.length === 1) {
    const wrap = onceFn(fn, context);
    return curry(wrap);
  }

  return onceFn(fn, context);
}

function pipe(...fns) {
  return compose(...fns.reverse());
}

function piped(...inputs) {
  const [input, ...fnList] = inputs;
  return pipe(...fnList)(input);
}

function promiseAllObject(promises) {
  return new Promise((res, rej) => {
    let counter = 0;
    const props = {};
    const promisedArr = [];

    for (const prop in promises) {
      props[counter] = prop;
      promisedArr.push(promises[prop]);
      counter++;
    }

    Promise.all(promisedArr).then(result => {
      const willReturn = {};
      result.map((val, key) => {
        const prop = props[key];
        willReturn[prop] = val;
      });
      res(willReturn);
    }).catch(rej);
  });
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remove(inputs, text) {
  if (arguments.length === 1) {
    return textHolder => remove(inputs, textHolder);
  }

  if (type(text) !== 'String') {
    throw new Error(`R.remove requires string not ${type(text)}`);
  }

  if (type(inputs) !== 'Array') {
    return replace(inputs, '', text).trim();
  }

  let textCopy = text;
  inputs.forEach(singleInput => {
    textCopy = replace(singleInput, '', textCopy).trim();
  });
  return textCopy;
}

function omit(keys, obj) {
  if (arguments.length === 1) return _obj => omit(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function renameProps(conditions, inputObject) {
  if (inputObject === undefined) {
    return inputObjectHolder => renameProps(conditions, inputObjectHolder);
  }

  const renamed = {};
  Object.keys(conditions).forEach(renameConditionProp => {
    if (Object.keys(inputObject).includes(renameConditionProp)) {
      renamed[conditions[renameConditionProp]] = inputObject[renameConditionProp];
    }
  });
  return merge(renamed, omit(Object.keys(conditions), inputObject));
}

function tryCatch(fn, fallback) {
  if (!isFunction$1(fn)) {
    throw new Error(`R.tryCatch | fn '${fn}'`);
  }

  const passFallback = isFunction$1(fallback);

  if (!isPromise(fn)) {
    return (...inputs) => {
      try {
        return fn(...inputs);
      } catch (e) {
        return passFallback ? fallback(...inputs) : fallback;
      }
    };
  }

  return (...inputs) => new Promise(resolve => {
    fn(...inputs).then(resolve).catch(() => {
      if (!passFallback) {
        return resolve(fallback);
      }

      if (!isPromise(fallback)) {
        return resolve(fallback(...inputs));
      }

      fallback(...inputs).then(resolve);
    });
  });
}

function unless(condition, whenFalse) {
  if (arguments.length === 1) {
    return whenFalseHolder => unless(condition, whenFalseHolder);
  }

  return input => {
    const flag = typeof condition === 'boolean' ? condition : condition(input);
    if (flag) return input;
    if (isFunction$1(whenFalse)) return whenFalse(input);
    return whenFalse;
  };
}

function when(condition, whenTrue) {
  if (arguments.length === 1) {
    return whenTrueHolder => when(condition, whenTrueHolder);
  }

  return input => {
    const flag = typeof condition === 'boolean' ? condition : condition(input);
    if (!flag) return input;
    if (isFunction$1(whenTrue)) return whenTrue(input);
    return whenTrue;
  };
}

function where(conditions, obj) {
  if (obj === undefined) {
    return objHolder => where(conditions, objHolder);
  }

  let flag = true;

  for (const prop in conditions) {
    const result = conditions[prop](obj[prop]);

    if (flag && result === false) {
      flag = false;
    }
  }

  return flag;
}

function add(a, b) {
  if (arguments.length === 1) return _b => add(a, _b);
  return a + b;
}

function adjustRaw(fn, idx, list) {
  const clone = list.slice();
  const actualIndex = idx < 0 ? clone.length + idx : idx;
  clone[actualIndex] = fn(clone[actualIndex]);
  return clone;
}

const adjust = curry(adjustRaw);

function all(fn, list) {
  if (arguments.length === 1) return _list => all(fn, _list);

  for (let i = 0; i < list.length; i++) {
    if (!fn(list[i], i)) return false;
  }

  return true;
}

function any(fn, list) {
  if (arguments.length === 1) return _list => any(fn, _list);
  let counter = 0;

  while (counter < list.length) {
    if (fn(list[counter], counter)) {
      return true;
    }

    counter++;
  }

  return false;
}

function allPass(predicates, list) {
  if (arguments.length === 1) return _list => allPass(predicates, _list);
  return !any(fn => !fn(list), predicates);
}

function always(val) {
  return () => val;
}

function anyPass(predicates, list) {
  if (arguments.length === 1) return _list => anyPass(predicates, _list);
  return any(fn => fn(list))(predicates);
}

function append(el, list) {
  if (arguments.length === 1) return _list => append(el, _list);
  if (typeof list === 'string') return `${list}${el}`;
  const clone = list.concat();
  clone.push(el);
  return clone;
}

function assocRaw(prop, val, obj) {
  return Object.assign({}, obj, {
    [prop]: val
  });
}

const assoc = curry(assocRaw);

function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return input => f(input) && g(input);
}

function complement(fn) {
  return input => !fn(input);
}

function concat(left, right) {
  if (arguments.length === 1) return _right => concat(left, _right);
  return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
}

const dec = n => n - 1;

function flagIs(inputArgument) {
  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true;
}

function defaultTo(defaultArgument, ...inputArgument) {
  if (arguments.length === 1) {
    return _inputArgument => defaultTo(defaultArgument, _inputArgument);
  } else if (arguments.length === 2) {
    return flagIs(inputArgument[0]) ? defaultArgument : inputArgument[0];
  }

  const limit = inputArgument.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArgument[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function dissoc(prop, obj) {
  if (arguments.length === 1) return _obj => dissoc(prop, _obj);
  if (obj === null || obj === undefined) return {};
  const willReturn = {};

  for (const p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
}

function divide(a, b) {
  if (arguments.length === 1) return _b => divide(a, _b);
  return a / b;
}

function drop(n, list) {
  if (arguments.length === 1) return _list => drop(n, _list);
  return list.slice(n);
}

function dropLast(n, list) {
  if (arguments.length === 1) return _list => dropLast(n, _list);
  return list.slice(0, -n);
}

function either(f, g) {
  if (arguments.length === 1) return _g => either(f, _g);
  return input => f(input) || g(input);
}

function endsWith(suffix, list) {
  if (arguments.length === 1) return _list => endsWith(suffix, _list);
  return list.endsWith(suffix);
}

function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b);

  if (a === b) {
    return true;
  }

  const aType = type(a);

  if (aType !== type(b)) {
    return false;
  }

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false;
    }

    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }

    let loopObjectFlag = true;
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance];
        const bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });
    return loopObjectFlag;
  }

  return false;
}

function F() {
  return false;
}

function filterObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (fn(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, list) {
  if (arguments.length === 1) return _list => filter(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return filterObject(fn, list);
  }

  let index = -1;
  let resIndex = 0;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];

    if (fn(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function find(fn, list) {
  if (arguments.length === 1) return _list => find(fn, _list);
  return list.find(fn);
}

function findIndex(fn, list) {
  if (arguments.length === 1) return _list => findIndex(fn, _list);
  const len = list.length;
  let index = -1;

  while (++index < len) {
    if (fn(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function flatten(list, input) {
  const willReturn = input === undefined ? [] : input;

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  return (...input) => {
    if (input.length === 1) {
      return holder => fn(holder, input[0]);
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}

function toPairs(obj) {
  return Object.entries(obj);
}

function fromPairs(list) {
  const toReturn = {};
  list.forEach(([prop, value]) => toReturn[prop] = value);
  return toReturn;
}

function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};

  for (const key in val) {
    const v = val[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
}

function forEach(fn, list) {
  if (arguments.length === 1) return _list => forEach(fn, _list);
  map(fn, list);
  return list;
}

function groupBy(fn, list) {
  if (arguments.length === 1) return _list => groupBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

function groupWith(predicate, list) {
  const toReturn = [];
  let holder = [];
  list.reduce((prev, current, i) => {
    if (i > 0 && predicate(prev, current)) {
      if (holder.length === 0) {
        holder.push(prev);
        holder.push(current);
      } else {
        holder.push(current);
      }
    } else if (i > 0) {
      if (holder.length === 0) {
        toReturn.push([prev]);
        if (i === list.length - 1) holder.push(current);
      } else {
        toReturn.push(holder);
        holder = [];
      }
    }

    return current;
  }, undefined);
  return holder.length === 0 ? toReturn : [...toReturn, holder];
}

function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
  return obj[prop] !== undefined;
}

function head(list) {
  if (typeof list === 'string') return list[0] || '';
  return list[0];
}

function identity(x) {
  return x;
}

function ifElse(condition, onTrue, onFalse) {
  if (onTrue === undefined) {
    return (_onTrue, _onFalse) => ifElse(condition, _onTrue, _onFalse);
  } else if (onFalse === undefined) {
    return _onFalse => ifElse(condition, onTrue, _onFalse);
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input);

    if (conditionResult === true) {
      return onTrue(input);
    }

    return onFalse(input);
  };
}

const inc = n => n + 1;

function indexBy(fn, list) {
  if (arguments.length === 1) return _list => indexBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    result[fn(item)] = item;
  }

  return result;
}

function indexOf(target, list) {
  if (arguments.length === 1) return _list => indexOf(target, _list);
  let index = -1;
  const {
    length
  } = list;

  while (++index < length) {
    if (list[index] === target) {
      return index;
    }
  }

  return -1;
}

function is(ctor, val) {
  if (arguments.length === 1) return _val => is(ctor, _val);
  return val != null && val.constructor === ctor || val instanceof ctor;
}

function isNil(x) {
  return x === undefined || x === null;
}

function join(separator, list) {
  if (arguments.length === 1) return _list => join(separator, _list);
  return list.join(separator);
}

function keys(obj) {
  return Object.keys(obj);
}

function length(list) {
  return list.length;
}

function match(pattern, str) {
  if (arguments.length === 1) return _str => match(pattern, _str);
  const willReturn = str.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function max(a, b) {
  if (arguments.length === 1) return _b => max(a, _b);
  return b > a ? b : a;
}

function maxBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => maxBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => maxBy(fn, _a, _b);
  }

  return fn(b) > fn(a) ? b : a;
}

function min(a, b) {
  if (arguments.length === 1) return _b => min(a, _b);
  return b < a ? b : a;
}

function minBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => minBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => minBy(fn, _a, _b);
  }

  return fn(b) < fn(a) ? b : a;
}

function modulo(a, b) {
  if (arguments.length === 1) return _b => modulo(a, _b);
  return a % b;
}

function multiply(a, b) {
  if (arguments.length === 1) return _b => multiply(a, _b);
  return a * b;
}

function none(fn, list) {
  if (arguments.length === 1) return _list => none(fn, _list);
  return list.filter(fn).length === 0;
}

function not(a) {
  return !a;
}

function nth(offset, list) {
  if (arguments.length === 1) return _list => nth(offset, _list);
  const idx = offset < 0 ? list.length + offset : offset;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}

function partial(fn, ...args) {
  const len = fn.length;
  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest);
    }

    return partial(fn, ...[...args, ...rest]);
  };
}

function partialCurry(fn, args = {}) {
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(rest, args)).then(resolve).catch(reject);
      });
    }

    return fn(merge(rest, args));
  };
}

function pickAll(keys, obj) {
  if (arguments.length === 1) return _obj => pickAll(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }

    counter++;
  }

  return willReturn;
}

function pluck(key, list) {
  if (arguments.length === 1) return _list => pluck(key, _list);
  const willReturn = [];
  map(val => {
    if (val[key] !== undefined) {
      willReturn.push(val[key]);
    }
  }, list);
  return willReturn;
}

function prepend(el, list) {
  if (arguments.length === 1) return _list => prepend(el, _list);
  if (typeof list === 'string') return `${el}${list}`;
  const clone = [el].concat(list);
  return clone;
}

function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
}

function propEq(key, val, obj) {
  if (val === undefined) {
    return (_val, _obj) => propEq(key, _val, _obj);
  } else if (obj === undefined) {
    return _obj => propEq(key, val, _obj);
  }

  return obj[key] === val;
}

function range(from, to) {
  if (arguments.length === 1) return _to => range(from, _to);
  const len = to - from;
  const willReturn = Array(len);

  for (let i = 0; i < len; i++) {
    willReturn[i] = from + i;
  }

  return willReturn;
}

function reduceFn(fn, acc, list) {
  return list.reduce(fn, acc);
}

const reduce = curry(reduceFn);

function reject(fn, list) {
  if (arguments.length === 1) return _list => reject(fn, _list);
  return filter((x, i) => !fn(x, i), list);
}

function repeat(val, n) {
  if (arguments.length === 1) return _n => repeat(val, _n);
  const willReturn = Array(n);
  return willReturn.fill(val);
}

function reverse(list) {
  const clone = list.concat();
  return clone.reverse();
}

function sortBy(fn, list) {
  if (arguments.length === 1) return _list => sortBy(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);
    if (fnA === fnB) return 0;
    return fnA < fnB ? -1 : 1;
  });
}

function split(separator, str) {
  if (arguments.length === 1) return _str => split(separator, _str);
  return str.split(separator);
}

function splitEvery(n, list) {
  if (arguments.length === 1) return _list => splitEvery(n, _list);
  const numValue = n > 1 ? n : 1;
  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, counter += numValue));
  }

  return willReturn;
}

function startsWith(prefix, list) {
  if (arguments.length === 1) return _list => startsWith(prefix, _list);
  return list.startsWith(prefix);
}

function subtract(a, b) {
  if (arguments.length === 1) return _b => subtract(a, _b);
  return a - b;
}

function T() {
  return true;
}

function tail(list) {
  return drop(1, list);
}

function takeLast(n, list) {
  if (arguments.length === 1) return _list => takeLast(n, _list);
  const len = list.length;
  let numValue = n > len ? len : n;
  if (typeof list === 'string') return list.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(list, numValue, len);
}

function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
}

function test(pattern, str) {
  if (arguments.length === 1) return _str => test(pattern, _str);
  return str.search(pattern) !== -1;
}

function times(fn, n) {
  if (arguments.length === 1) return _n => times(fn, _n);
  return map(fn, range(0, n));
}

function toLower(str) {
  return str.toLowerCase();
}

function toString$1(val) {
  return val.toString();
}

function toUpper(str) {
  return str.toUpperCase();
}

function trim(str) {
  return str.trim();
}

function uniqWith(fn, list) {
  if (arguments.length === 1) return _list => uniqWith(fn, _list);
  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];
    const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function update(idx, val, list) {
  if (val === undefined) {
    return (_val, _list) => update(idx, _val, _list);
  } else if (list === undefined) {
    return _list => update(idx, val, _list);
  }

  const arrClone = list.concat();
  return arrClone.fill(val, idx, idx + 1);
}

function values(obj) {
  return Object.values(obj);
}

function zip(left, right) {
  if (arguments.length === 1) return _right => zip(left, _right);
  const result = [];
  const length = Math.min(left.length, right.length);

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result;
}

function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
  return keys.reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i];
    return prev;
  }, {});
}

exports.F = F;
exports.T = T;
exports.add = add;
exports.adjust = adjust;
exports.all = all;
exports.allPass = allPass;
exports.allTrue = allTrue;
exports.allType = allType;
exports.always = always;
exports.any = any;
exports.anyFalse = anyFalse;
exports.anyPass = anyPass;
exports.anyTrue = anyTrue;
exports.anyType = anyType;
exports.append = append;
exports.assoc = assoc;
exports.both = both;
exports.change = change;
exports.clone = clone;
exports.complement = complement;
exports.compose = compose;
exports.composed = composed;
exports.concat = concat;
exports.curry = curry;
exports.debounce = debounce;
exports.dec = dec;
exports.defaultTo = defaultTo;
exports.defaultToWhen = defaultToWhen;
exports.dissoc = dissoc;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.either = either;
exports.endsWith = endsWith;
exports.equals = equals;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.findModify = findModify;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach;
exports.fromPairs = fromPairs;
exports.getter = getter;
exports.groupBy = groupBy;
exports.groupWith = groupWith;
exports.has = has;
exports.head = head;
exports.identity = identity;
exports.ifElse = ifElse;
exports.inc = inc;
exports.indexBy = indexBy;
exports.indexOf = indexOf;
exports.init = init;
exports.is = is;
exports.isFalsy = isFalsy;
exports.isFunction = isFunction$1;
exports.isNil = isNil;
exports.isPromise = isPromise;
exports.isType = isType;
exports.join = join;
exports.keys = keys;
exports.last = last;
exports.length = length;
exports.map = map;
exports.mapAsync = mapAsync;
exports.mapFastAsync = mapFastAsync;
exports.match = match;
exports.max = max;
exports.maxBy = maxBy;
exports.memoize = memoize$1;
exports.merge = merge;
exports.mergeAll = mergeAll;
exports.mergeDeep = mergeDeep;
exports.mergeRight = mergeRight;
exports.min = min;
exports.minBy = minBy;
exports.modulo = modulo;
exports.multiply = multiply;
exports.none = none;
exports.not = not;
exports.nth = nth;
exports.omit = omit;
exports.once = once;
exports.opposite = complement;
exports.partial = partial;
exports.partialCurry = partialCurry;
exports.partition = partition;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pipe = pipe;
exports.piped = piped;
exports.pluck = pluck;
exports.prepend = prepend;
exports.promiseAllObject = promiseAllObject;
exports.prop = prop;
exports.propEq = propEq;
exports.random = random;
exports.range = range;
exports.reduce = reduce;
exports.reject = reject;
exports.remove = remove;
exports.renameProps = renameProps;
exports.repeat = repeat;
exports.replace = replace;
exports.reset = reset;
exports.reverse = reverse;
exports.setter = setter;
exports.sort = sort;
exports.sortBy = sortBy;
exports.split = split;
exports.splitEvery = splitEvery;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.tap = tap;
exports.test = test;
exports.times = times;
exports.toLower = toLower;
exports.toPairs = toPairs;
exports.toString = toString$1;
exports.toUpper = toUpper;
exports.trim = trim;
exports.tryCatch = tryCatch;
exports.type = type;
exports.uniqWith = uniqWith;
exports.unless = unless;
exports.update = update;
exports.values = values;
exports.when = when;
exports.where = where;
exports.zip = zip;
exports.zipObj = zipObj;
