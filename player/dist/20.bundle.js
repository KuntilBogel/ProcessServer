"use strict";(self.webpackChunkmyLibrary=self.webpackChunkmyLibrary||[]).push([[20],{20:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r={toMilliseconds:function(e){var t=/^\s*(\d{1,2}:)?(\d{1,2}):(\d{1,2})([.,](\d{1,3}))?\s*$/.exec(e);return 3600*(t[1]?parseInt(t[1].replace(":","")):0)*1e3+60*parseInt(t[2])*1e3+1e3*parseInt(t[3])+(t[5]?parseInt(t[5]):0)},toTimeString:function(e){var t=Math.floor(e/1e3/3600),n=Math.floor(e/1e3/60%60),r=Math.floor(e/1e3%60),o=Math.floor(e%1e3);return(t<10?"0":"")+t+":"+(n<10?"0":"")+n+":"+(r<10?"0":"")+r+"."+(o<100?"0":"")+(o<10?"0":"")+o}};const o={name:"vtt",helper:r,detect:function(e){if("string"!=typeof e)throw new Error("Expected string content!");if(/^[\s\r\n]*WEBVTT\r?\n/g.test(e))return"vtt"},parse:function(e,t){for(var n=1,o=[],a=t.eol||"\r\n",s=e.split(/\r?\n\s+\r?\n/),i=0;i<s.length;i++){var c=/^([^\r\n]+\r?\n)?((\d{1,2}:)?\d{1,2}:\d{1,2}([.,]\d{1,3})?)\s*\-\-\>\s*((\d{1,2}:)?\d{1,2}:\d{1,2}([.,]\d{1,3})?)\r?\n([\s\S]*)(\r?\n)*$/gi.exec(s[i]);if(c){(d={type:"caption"}).index=n++,c[1]&&(d.cue=c[1].replace(/[\r\n]*/gi,"")),d.start=r.toMilliseconds(c[2]),d.end=r.toMilliseconds(c[5]),d.duration=d.end-d.start;var l=c[8].split(/\r?\n/);d.content=l.join(a),d.text=d.content.replace(/\<[^\>]+\>/g,"").replace(/\{[^\}]+\}/g,""),o.push(d)}else{var d,p=/^([A-Z]+)(\r?\n([\s\S]*))?$/.exec(s[i]);p||(p=/^([A-Z]+)\s+([^\r\n]*)?$/.exec(s[i])),p?((d={type:"meta"}).name=p[1],p[3]&&(d.data=p[3]),o.push(d)):t.verbose&&console.log("WARN: Unknown part",s[i])}}return o},build:function(e,t){for(var n=t.eol||"\r\n",o="WEBVTT"+n+n,a=0;a<e.length;a++){var s=e[a];if("meta"!=s.type)void 0!==s.type&&"caption"!=s.type?t.verbose&&console.log("SKIP:",s):(o+=(a+1).toString()+n,o+=r.toTimeString(s.start)+" --\x3e "+r.toTimeString(s.end)+n,o+=s.text+n,o+=n);else{if("WEBVTT"==s.name)continue;o+=s.name+n,o+=s.data?s.data+n:"",o+=n}}return o}}}}]);