"use strict";(self.webpackChunkmyLibrary=self.webpackChunkmyLibrary||[]).push([[404],{404:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={name:"sub",detect:function(e){if("string"==typeof e&&/^\{\d+\}\{\d+\}(.*)/.test(e))return"sub"},parse:function(e,t){for(var r=t.fps>0?t.fps:25,n=[],a=t.eol||"\r\n",s=e.split(/\r?\n/g),o=0;o<s.length;o++){var f=/^\{(\d+)\}\{(\d+)\}(.*)$/gi.exec(s[o]);if(f){var p={type:"caption"};p.index=o+1,p.frame={start:parseInt(f[1]),end:parseInt(f[2])},p.frame.count=p.frame.end-p.frame.start,p.start=Math.round(p.frame.start/r),p.end=Math.round(p.frame.end/r),p.duration=p.end-p.start;var d=f[3].split(/\|/g);p.content=d.join(a),p.text=p.content.replace(/\{[^\}]+\}/g,""),n.push(p)}else t.verbose&&console.log("WARN: Unknown part",s[o])}return n},build:function(e,t){for(var r=t.fps>0?t.fps:25,n="",a=t.eol||"\r\n",s=0;s<e.length;s++){var o=e[s];void 0!==o.type&&"caption"!=o.type?t.verbose&&console.log("SKIP:",o):n+="{"+("object"==typeof o.frame&&o.frame.start>=0?o.frame.start:o.start*r)+"}{"+("object"==typeof o.frame&&o.frame.end>=0?o.frame.end:o.end*r)+"}"+o.text.replace(/\r?\n/,"|")+a}return n}}}}]);