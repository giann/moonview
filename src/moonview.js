/*jshint esversion: 6 */
"use strict";

window.WEB = true;

const fengari  = require('fengari');
const lua      = fengari.lua;
const lauxlib  = fengari.lauxlib;
const lualib   = fengari.lualib;
const interop  = require('fengari-interop');

const L = lauxlib.luaL_newstate();

/* open standard libraries */
lualib.luaL_openlibs(L);
lauxlib.luaL_requiref(L, lua.to_luastring("js"), interop.luaopen_js, 1);
lua.lua_pop(L, 1); /* remove lib */

let ok = lauxlib.luaL_loadfile(L, lua.to_luastring("src/moonview.lua"));

if (ok === lua.LUA_OK) {
    ok = lua.lua_pcall(L, 0, 0, 0); /* TODO: use message handler to add traceback */
}

if (ok !== lua.LUA_OK) {
    let msg = lauxlib.luaL_tolstring(L, -1);
    lua.lua_pop(L, 1);
    console.error(lua.to_jsstring(msg));
}
