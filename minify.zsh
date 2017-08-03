#!/usr/local/bin/zsh

for dir in $(find src -type d); do 
    dest=`echo $dir | cut -c5-`;
    mkdir -p dist/$dest;
done

for file in $(find src -name "*.lua"); do 
    dest=`echo $file | cut -c5-`;
    node_modules/.bin/luamin -f $file > dist/$dest;
done

for dir in $(find -L lua_modules -type d); do 
    mkdir -p dist/$dir;
done

for file in $(find -L lua_modules -name "*.lua"); do 
    node_modules/.bin/luamin -f $file > dist/$file;
done
