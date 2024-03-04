const f=Symbol.for("react-aria.i18n.locale"),g=Symbol.for("react-aria.i18n.strings");let i;class u{getStringForLocale(t,e){let n=this.getStringsForLocale(e)[t];if(!n)throw new Error(`Could not find intl message ${t} in ${e} locale`);return n}getStringsForLocale(t){let e=this.strings[t];return e||(e=$(t,this.strings,this.defaultLocale),this.strings[t]=e),e}static getGlobalDictionaryForPackage(t){if(typeof window>"u")return null;let e=window[f];if(i===void 0){let n=window[g];if(!n)return null;i={};for(let a in n)i[a]=new u({[e]:n[a]},e)}let r=i==null?void 0:i[t];if(!r)throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return r}constructor(t,e="en-US"){this.strings={...t},this.defaultLocale=e}}function $(l,t,e="en-US"){if(t[l])return t[l];let r=h(l);if(t[r])return t[r];for(let n in t)if(n.startsWith(r+"-"))return t[n];return t[e]}function h(l){return Intl.Locale?new Intl.Locale(l).language:l.split("-")[0]}const s=new Map,c=new Map;class b{format(t,e){let r=this.strings.getStringForLocale(t,this.locale);return typeof r=="function"?r(e,this):r}plural(t,e,r="cardinal"){let n=e["="+t];if(n)return typeof n=="function"?n():n;let a=this.locale+":"+r,o=s.get(a);o||(o=new Intl.PluralRules(this.locale,{type:r}),s.set(a,o));let d=o.select(t);return n=e[d]||e.other,typeof n=="function"?n():n}number(t){let e=c.get(this.locale);return e||(e=new Intl.NumberFormat(this.locale),c.set(this.locale,e)),e.format(t)}select(t,e){let r=t[e]||t.other;return typeof r=="function"?r():r}constructor(t,e){this.locale=t,this.strings=e}}export{b as $,u as a};