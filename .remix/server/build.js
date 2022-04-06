var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/felixgourdeau/repos/unitsguru/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links4,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/modules/github-corner/github-corner.component.tsx
init_react();

// app/modules/github-corner/github-corner.styles.css
var github_corner_styles_default = "/_static/.remix/_assets/github-corner.styles-SN2VGIGU.css";

// app/modules/github-corner/github-corner.component.tsx
var links = () => [{ rel: "stylesheet", href: github_corner_styles_default }];
var GithubCorner = ({ url }) => /* @__PURE__ */ React.createElement("a", {
  href: url,
  className: "github-corner",
  "aria-label": "View source on GitHub"
}, /* @__PURE__ */ React.createElement("svg", {
  width: "80",
  height: "80",
  viewBox: "0 0 250 250",
  className: "svgStyle",
  "aria-hidden": "true"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
  fill: "currentColor",
  className: "pathStyle octo-arm"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
  fill: "currentColor",
  className: "octo-body"
})));

// app/modules/layout/layout.component.tsx
init_react();
var import_remix2 = __toESM(require_remix());

// app/modules/layout/layout.styles.css
var layout_styles_default = "/_static/.remix/_assets/layout.styles-OW2RVRWV.css";

// app/modules/layout/layout.component.tsx
var links2 = () => [{ rel: "stylesheet", href: layout_styles_default }];
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, "units \u{1F913} guru"), /* @__PURE__ */ React.createElement(GithubCorner, {
    url: "https://github.com/felixgourdeau/unitsguru"
  }), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    prefetch: "render",
    to: "/gas"
  }, "Gas price"), " ", "|", " ", /* @__PURE__ */ React.createElement(import_remix2.Link, {
    prefetch: "render",
    to: "/currency"
  }, "Currency"), " ", "|", " ", /* @__PURE__ */ React.createElement(import_remix2.Link, {
    prefetch: "render",
    to: "/about"
  }, "About")), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", null, "\xA9 2022 F\xE9lix Gourdeau Inc. All Rights Reserved.")));
};

// app/modules/fuel-price-converter/fuel-price-converter.component.tsx
init_react();
var import_react4 = __toESM(require("react"));

// app/modules/fuel-price-converter/fuel-price-converter.selector.ts
init_react();

// app/modules/fuel-price-converter/fuel-price-converter.constant.ts
init_react();
var VOLUME_UNITS = [
  { abbreviation: "L", name: "Litre", amount: 1 },
  { abbreviation: "GAL", name: "Gallon US", amount: 0.219969 }
];

// app/modules/fuel-price-converter/fuel-price-converter.selector.ts
var getDestinationFuelPrice = ({
  sourcePrice,
  sourceCurrency,
  destinationCurrency,
  sourceVolume,
  destinationVolume,
  rates
}) => {
  var _a, _b;
  if (sourcePrice === "")
    return;
  const sourceFuelPrice = parseFloat(sourcePrice || "-1");
  if (!sourceCurrency || !destinationCurrency || !sourceFuelPrice)
    return;
  const sourceRate = rates[sourceCurrency];
  const destinationRate = rates[destinationCurrency];
  const sourceVolumeAmount = (_a = VOLUME_UNITS.find((quantity) => quantity.abbreviation === sourceVolume)) == null ? void 0 : _a.amount;
  const destinationVolumeAmount = (_b = VOLUME_UNITS.find((quantity) => quantity.abbreviation === destinationVolume)) == null ? void 0 : _b.amount;
  if (!sourceRate || !destinationRate || !sourceVolumeAmount || !destinationVolumeAmount)
    return;
  return sourceFuelPrice * destinationRate * sourceVolumeAmount / destinationVolumeAmount / sourceRate;
};

// app/modules/fuel-price-form/fuel-price-form.component.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_remix3 = __toESM(require_remix());

// app/modules/currency-input/currency-input.component.tsx
init_react();
var import_react = __toESM(require("react"));

// app/modules/currency-input/currency-input.selector.ts
init_react();
var formatPrice = (value, requiredDecimal) => {
  var _a;
  const divider = requiredDecimal > 0 ? Math.pow(10, requiredDecimal) : 1;
  const roundedValue = `${Math.round(parseFloat(value) * divider) / divider}`;
  if (requiredDecimal === 0)
    return `${roundedValue}`;
  const isInteger = !roundedValue.includes(".");
  const decimals = (((_a = roundedValue.split(/\./)) == null ? void 0 : _a[1]) ?? "").length;
  const missingDecimal = requiredDecimal - decimals;
  console.log({
    divider,
    isInteger,
    value,
    roundedValue,
    decimals,
    missingDecimal,
    requiredDecimal
  });
  return `${roundedValue}${isInteger ? "." : ""}${"0".repeat(missingDecimal)}`;
};

// app/modules/currency-input/currency-input.component.tsx
var CurrencyInput = ({ inputRef, decimals, disabled }) => {
  return /* @__PURE__ */ import_react.default.createElement("input", {
    disabled,
    type: "number",
    id: "price",
    ref: inputRef,
    onBlur: (event) => {
      console.log("ONBLUR", event.target.value, formatPrice(event.target.value, decimals), inputRef);
      if (inputRef.current)
        inputRef.current.value = formatPrice(event.target.value, decimals);
    }
  });
};

// app/modules/currency-select/currency-select.component.tsx
init_react();
var import_react2 = __toESM(require("react"));
var formatCurrencyItem = (name, symbol) => `${name == null ? void 0 : name.replace(/(.{16})..+/, "$1\u2026")} (${symbol})`;
var CurrencySelect = ({ currencies, inputRef }) => {
  const DEFAULT_FAVORITE_CODES = ["USD", "CAD", "EUR"];
  const favoriteCurrencies = DEFAULT_FAVORITE_CODES.map((defaultCurrency) => {
    return currencies.find((currency) => currency.code === defaultCurrency);
  }).filter(Boolean);
  console.log({ favoriteCurrencies });
  const renderCurrencyItem = (currency) => {
    if (!currency)
      return null;
    const { code, name, symbol } = currency;
    return /* @__PURE__ */ import_react2.default.createElement("option", {
      key: code,
      value: code
    }, formatCurrencyItem(name, symbol));
  };
  return /* @__PURE__ */ import_react2.default.createElement("select", {
    id: "currency",
    ref: inputRef
  }, favoriteCurrencies.map(renderCurrencyItem), /* @__PURE__ */ import_react2.default.createElement("option", {
    disabled: true
  }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"), currencies.map(renderCurrencyItem));
};

// app/modules/fuel-price-form/fuel-price-form.component.tsx
var FuelPriceForm = ({ currencies, formFieldRefs, onChangeCallback, type }) => {
  const { priceRef, currencyRef, volumeRef } = formFieldRefs;
  const currency = currencies.find((currency2) => {
    var _a;
    return currency2.code === ((_a = currencyRef.current) == null ? void 0 : _a.value);
  });
  const decimals = (currency == null ? void 0 : currency.dec) ?? 2;
  return /* @__PURE__ */ import_react3.default.createElement(import_remix3.Form, {
    onChange: onChangeCallback,
    className: "row"
  }, /* @__PURE__ */ import_react3.default.createElement(CurrencyInput, {
    inputRef: priceRef,
    decimals,
    disabled: type === "destination"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "cell"
  }, /* @__PURE__ */ import_react3.default.createElement(CurrencySelect, {
    inputRef: currencyRef,
    currencies
  }), /* @__PURE__ */ import_react3.default.createElement("select", {
    id: "volume",
    ref: volumeRef
  }, VOLUME_UNITS.map(({ abbreviation, name }) => /* @__PURE__ */ import_react3.default.createElement("option", {
    key: abbreviation,
    value: abbreviation
  }, `${name}`)))));
};

// app/modules/fuel-price-converter/fuel-price-converter.styles.css
var fuel_price_converter_styles_default = "/_static/.remix/_assets/fuel-price-converter.styles-USG76ZLK.css";

// app/modules/fuel-price-converter/fuel-price-converter.component.tsx
var links3 = () => [{ rel: "stylesheet", href: fuel_price_converter_styles_default }];
var FuelPriceConverter = ({ currencies, rates }) => {
  const inputFieldRefs = {
    priceRef: import_react4.default.useRef(null),
    currencyRef: import_react4.default.useRef(null),
    volumeRef: import_react4.default.useRef(null)
  };
  const outputFieldRefs = {
    priceRef: import_react4.default.useRef(null),
    currencyRef: import_react4.default.useRef(null),
    volumeRef: import_react4.default.useRef(null)
  };
  const onFormChange = () => {
    var _a, _b, _c, _d, _e;
    const outputPrice = getDestinationFuelPrice({
      sourcePrice: (_a = inputFieldRefs.priceRef.current) == null ? void 0 : _a.value,
      sourceCurrency: (_b = inputFieldRefs.currencyRef.current) == null ? void 0 : _b.value,
      destinationCurrency: (_c = outputFieldRefs.currencyRef.current) == null ? void 0 : _c.value,
      sourceVolume: (_d = inputFieldRefs.volumeRef.current) == null ? void 0 : _d.value,
      destinationVolume: (_e = outputFieldRefs.volumeRef.current) == null ? void 0 : _e.value,
      rates
    });
    const currentDecimal = currencies.find((currency) => {
      var _a2;
      return currency.code === ((_a2 = outputFieldRefs.currencyRef.current) == null ? void 0 : _a2.value);
    });
    const result = formatPrice(outputPrice ? `${outputPrice}` : "", (currentDecimal == null ? void 0 : currentDecimal.dec) ?? 2);
    if (outputFieldRefs.priceRef.current)
      outputFieldRefs.priceRef.current.value = result;
  };
  import_react4.default.useEffect(() => {
    inputFieldRefs.currencyRef.current.value = "CAD";
    outputFieldRefs.currencyRef.current.value = "USD";
    inputFieldRefs.volumeRef.current.value = "L";
    outputFieldRefs.volumeRef.current.value = "GAL";
    inputFieldRefs.priceRef.current.value = "1";
    onFormChange();
  });
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "formContainer"
  }, /* @__PURE__ */ import_react4.default.createElement(FuelPriceForm, {
    currencies,
    formFieldRefs: inputFieldRefs,
    onChangeCallback: onFormChange,
    type: "source"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "arrow"
  }, "\u2194"), /* @__PURE__ */ import_react4.default.createElement(FuelPriceForm, {
    currencies,
    formFieldRefs: outputFieldRefs,
    onChangeCallback: onFormChange,
    type: "destination"
  }));
};

// app/styles/main.css
var main_default = "/_static/.remix/_assets/main-5TTJ4LBJ.css";

// route:/Users/felixgourdeau/repos/unitsguru/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "units.guru",
  viewport: "width=device-width,initial-scale=1",
  description: "Unit converter tool"
});
var links4 = () => {
  return [
    ...links(),
    ...links2(),
    ...links3(),
    { rel: "stylesheet", href: main_default },
    { rel: "manifest", href: "app.webmanifest" }
  ];
};
var Document = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
};
function CatchBoundary() {
  const caught = (0, import_remix4.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText))));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route:/Users/felixgourdeau/repos/unitsguru/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_react();
var import_react5 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var about_default = () => {
  return /* @__PURE__ */ import_react5.default.createElement(import_remix5.Link, {
    prefetch: "render",
    to: "https://www.feligourdeau.ca"
  }, "felixgourdeau.ca");
};

// route:/Users/felixgourdeau/repos/unitsguru/app/routes/gas/index.tsx
var gas_exports = {};
__export(gas_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => gas_default,
  loader: () => loader
});
init_react();
var import_react6 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());

// app/statics/json/currency-data.json
var currency_data_default = [
  {
    country: "AL",
    code: "ALL",
    symbol: "ALL",
    name: "Albanian Lek",
    dec: 0,
    lat: 41,
    lon: 20
  },
  {
    country: "DZ",
    code: "DZD",
    symbol: "DA",
    name: "Algerian Dinar",
    dec: 2,
    lat: 28,
    lon: 3
  },
  {
    country: "AD",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 42.5,
    lon: 1.6
  },
  {
    country: "AR",
    code: "ARS",
    symbol: "AR$",
    name: "Argentine Peso",
    dec: 2,
    lat: -34,
    lon: -64
  },
  {
    country: "AM",
    code: "AMD",
    symbol: "AMD",
    name: "Armenian Dram",
    dec: 0,
    lat: 40,
    lon: 45
  },
  {
    country: "AU",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -27,
    lon: 133
  },
  {
    country: "AT",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 47.3333,
    lon: 13.3333
  },
  {
    country: "AZ",
    code: "AZN",
    symbol: "man.",
    name: "Azerbaijani Manat",
    dec: 2,
    lat: 40.5,
    lon: 47.5
  },
  {
    country: "BH",
    code: "BHD",
    symbol: "BD",
    name: "Bahraini Dinar",
    dec: 3,
    lat: 26,
    lon: 50.55
  },
  {
    country: "BD",
    code: "BDT",
    symbol: "Tk",
    name: "Bangladeshi Taka",
    dec: 2,
    lat: 24,
    lon: 90
  },
  {
    country: "BY",
    code: "BYR",
    symbol: "BYR",
    name: "Belarusian Ruble",
    dec: 0,
    lat: 53,
    lon: 28
  },
  {
    country: "BE",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 50.8333,
    lon: 4
  },
  {
    country: "BZ",
    code: "BZD",
    symbol: "BZ$",
    name: "Belize Dollar",
    dec: 2,
    lat: 17.25,
    lon: -88.75
  },
  {
    country: "BJ",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 9.5,
    lon: 2.25
  },
  {
    country: "BO",
    code: "BOB",
    symbol: "Bs",
    name: "Bolivian Boliviano",
    dec: 2,
    lat: -17,
    lon: -65
  },
  {
    country: "BA",
    code: "BAM",
    symbol: "KM",
    name: "Bosnia-Herzegovina Convertible Mark",
    dec: 2,
    lat: 44,
    lon: 18
  },
  {
    country: "BW",
    code: "BWP",
    symbol: "BWP",
    name: "Botswanan Pula",
    dec: 2,
    lat: -22,
    lon: 24
  },
  {
    country: "BV",
    code: "NOK",
    symbol: "Nkr",
    name: "Norwegian Krone",
    dec: 2,
    lat: -54.4333,
    lon: 3.4
  },
  {
    country: "BR",
    code: "BRL",
    symbol: "R$",
    name: "Brazilian Real",
    dec: 2,
    lat: -10,
    lon: -55
  },
  {
    country: "IO",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: -6,
    lon: 71.5
  },
  {
    country: "BN",
    code: "BND",
    symbol: "BN$",
    name: "Brunei Dollar",
    dec: 2,
    lat: 4.5,
    lon: 114.6667
  },
  {
    country: "BG",
    code: "BGN",
    symbol: "BGN",
    name: "Bulgarian Lev",
    dec: 2,
    lat: 43,
    lon: 25
  },
  {
    country: "BF",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 13,
    lon: -2
  },
  {
    country: "BI",
    code: "BIF",
    symbol: "FBu",
    name: "Burundian Franc",
    dec: 0,
    lat: -3.5,
    lon: 30
  },
  {
    country: "KH",
    code: "KHR",
    symbol: "KHR",
    name: "Cambodian Riel",
    dec: 2,
    lat: 13,
    lon: 105
  },
  {
    country: "CM",
    code: "XAF",
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    dec: 0,
    lat: 6,
    lon: 12
  },
  {
    country: "CA",
    code: "CAD",
    symbol: "CA$",
    name: "Canadian Dollar",
    dec: 2,
    lat: 60,
    lon: -95
  },
  {
    country: "CV",
    code: "CVE",
    symbol: "CV$",
    name: "Cape Verdean Escudo",
    dec: 2,
    lat: 16,
    lon: -24
  },
  {
    country: "CF",
    code: "XAF",
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    dec: 0,
    lat: 7,
    lon: 21
  },
  {
    country: "TD",
    code: "XAF",
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    dec: 0,
    lat: 15,
    lon: 19
  },
  {
    country: "CL",
    code: "CLP",
    symbol: "CL$",
    name: "Chilean Peso",
    dec: 0,
    lat: -30,
    lon: -71
  },
  {
    country: "CN",
    code: "CNY",
    symbol: "CN\xA5",
    name: "Chinese Yuan",
    dec: 2,
    lat: 35,
    lon: 105
  },
  {
    country: "CX",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -10.5,
    lon: 105.6667
  },
  {
    country: "CC",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -12.5,
    lon: 96.8333
  },
  {
    country: "CO",
    code: "COP",
    symbol: "CO$",
    name: "Colombian Peso",
    dec: 0,
    lat: 4,
    lon: -72
  },
  {
    country: "KM",
    code: "KMF",
    symbol: "CF",
    name: "Comorian Franc",
    dec: 0,
    lat: -12.1667,
    lon: 44.25
  },
  {
    country: "CG",
    code: "XAF",
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    dec: 0,
    lat: -1,
    lon: 15
  },
  {
    country: "CD",
    code: "CDF",
    symbol: "CDF",
    name: "Congolese Franc",
    dec: 2,
    lat: 0,
    lon: 25
  },
  {
    country: "CK",
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    dec: 2,
    lat: -21.2333,
    lon: -159.7667
  },
  {
    country: "CR",
    code: "CRC",
    symbol: "\u20A1",
    name: "Costa Rican Col\xF3n",
    dec: 0,
    lat: 10,
    lon: -84
  },
  {
    country: "CI",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 8,
    lon: -5
  },
  {
    country: "HR",
    code: "HRK",
    symbol: "kn",
    name: "Croatian Kuna",
    dec: 2,
    lat: 45.1667,
    lon: 15.5
  },
  {
    country: "CY",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 35,
    lon: 33
  },
  {
    country: "CZ",
    code: "CZK",
    symbol: "K\u010D",
    name: "Czech Republic Koruna",
    dec: 2,
    lat: 49.75,
    lon: 15.5
  },
  {
    country: "DK",
    code: "DKK",
    symbol: "Dkr",
    name: "Danish Krone",
    dec: 2,
    lat: 56,
    lon: 10
  },
  {
    country: "DJ",
    code: "DJF",
    symbol: "Fdj",
    name: "Djiboutian Franc",
    dec: 0,
    lat: 11.5,
    lon: 43
  },
  {
    country: "DO",
    code: "DOP",
    symbol: "RD$",
    name: "Dominican Peso",
    dec: 2,
    lat: 19,
    lon: -70.6667
  },
  {
    country: "EC",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: -2,
    lon: -77.5
  },
  {
    country: "EG",
    code: "EGP",
    symbol: "EGP",
    name: "Egyptian Pound",
    dec: 2,
    lat: 27,
    lon: 30
  },
  {
    country: "SV",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 13.8333,
    lon: -88.9167
  },
  {
    country: "GQ",
    code: "XAF",
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    dec: 0,
    lat: 2,
    lon: 10
  },
  {
    country: "ER",
    code: "ERN",
    symbol: "Nfk",
    name: "Eritrean Nakfa",
    dec: 2,
    lat: 15,
    lon: 39
  },
  {
    country: "EE",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 59,
    lon: 26
  },
  {
    country: "ET",
    code: "ETB",
    symbol: "Br",
    name: "Ethiopian Birr",
    dec: 2,
    lat: 8,
    lon: 38
  },
  {
    country: "FO",
    code: "DKK",
    symbol: "Dkr",
    name: "Danish Krone",
    dec: 2,
    lat: 62,
    lon: -7
  },
  {
    country: "FI",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 64,
    lon: 26
  },
  {
    country: "FR",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 46,
    lon: 2
  },
  {
    country: "GF",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 4,
    lon: -53
  },
  {
    country: "TF",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: -43,
    lon: 67
  },
  {
    country: "GA",
    code: "XAF",
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    dec: 0,
    lat: -1,
    lon: 11.75
  },
  {
    country: "GE",
    code: "GEL",
    symbol: "GEL",
    name: "Georgian Lari",
    dec: 2,
    lat: 42,
    lon: 43.5
  },
  {
    country: "DE",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 51,
    lon: 9
  },
  {
    country: "GH",
    code: "GHS",
    symbol: "GH\u20B5",
    name: "Ghanaian Cedi",
    dec: 2,
    lat: 8,
    lon: -2
  },
  {
    country: "GR",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 39,
    lon: 22
  },
  {
    country: "GL",
    code: "DKK",
    symbol: "Dkr",
    name: "Danish Krone",
    dec: 2,
    lat: 72,
    lon: -40
  },
  {
    country: "GP",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 16.25,
    lon: -61.5833
  },
  {
    country: "GU",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 13.4667,
    lon: 144.7833
  },
  {
    country: "GT",
    code: "GTQ",
    symbol: "GTQ",
    name: "Guatemalan Quetzal",
    dec: 2,
    lat: 15.5,
    lon: -90.25
  },
  {
    country: "GG",
    code: "GBP",
    symbol: "\xA3",
    name: "British Pound Sterling",
    dec: 2,
    lat: 49.5,
    lon: -2.56
  },
  {
    country: "GN",
    code: "GNF",
    symbol: "FG",
    name: "Guinean Franc",
    dec: 0,
    lat: 11,
    lon: -10
  },
  {
    country: "GW",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 12,
    lon: -15
  },
  {
    country: "HM",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -53.1,
    lon: 72.5167
  },
  {
    country: "VA",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 41.9,
    lon: 12.45
  },
  {
    country: "HN",
    code: "HNL",
    symbol: "HNL",
    name: "Honduran Lempira",
    dec: 2,
    lat: 15,
    lon: -86.5
  },
  {
    country: "HK",
    code: "HKD",
    symbol: "HK$",
    name: "Hong Kong Dollar",
    dec: 2,
    lat: 22.25,
    lon: 114.1667
  },
  {
    country: "HU",
    code: "HUF",
    symbol: "Ft",
    name: "Hungarian Forint",
    dec: 0,
    lat: 47,
    lon: 20
  },
  {
    country: "IS",
    code: "ISK",
    symbol: "Ikr",
    name: "Icelandic Kr\xF3na",
    dec: 0,
    lat: 65,
    lon: -18
  },
  {
    country: "IN",
    code: "INR",
    symbol: "Rs",
    name: "Indian Rupee",
    dec: 2,
    lat: 20,
    lon: 77
  },
  {
    country: "ID",
    code: "IDR",
    symbol: "Rp",
    name: "Indonesian Rupiah",
    dec: 0,
    lat: -5,
    lon: 120
  },
  {
    country: "IR",
    code: "IRR",
    symbol: "IRR",
    name: "Iranian Rial",
    dec: 0,
    lat: 32,
    lon: 53
  },
  {
    country: "IQ",
    code: "IQD",
    symbol: "IQD",
    name: "Iraqi Dinar",
    dec: 0,
    lat: 33,
    lon: 44
  },
  {
    country: "IE",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 53,
    lon: -8
  },
  {
    country: "IM",
    code: "GBP",
    symbol: "\xA3",
    name: "British Pound Sterling",
    dec: 2,
    lat: 54.23,
    lon: -4.55
  },
  {
    country: "IL",
    code: "ILS",
    symbol: "\u20AA",
    name: "Israeli New Sheqel",
    dec: 2,
    lat: 31.5,
    lon: 34.75
  },
  {
    country: "IT",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 42.8333,
    lon: 12.8333
  },
  {
    country: "JM",
    code: "JMD",
    symbol: "J$",
    name: "Jamaican Dollar",
    dec: 2,
    lat: 18.25,
    lon: -77.5
  },
  {
    country: "JP",
    code: "JPY",
    symbol: "\xA5",
    name: "Japanese Yen",
    dec: 0,
    lat: 36,
    lon: 138
  },
  {
    country: "JE",
    code: "GBP",
    symbol: "\xA3",
    name: "British Pound Sterling",
    dec: 2,
    lat: 49.21,
    lon: -2.13
  },
  {
    country: "JO",
    code: "JOD",
    symbol: "JD",
    name: "Jordanian Dinar",
    dec: 3,
    lat: 31,
    lon: 36
  },
  {
    country: "KZ",
    code: "KZT",
    symbol: "KZT",
    name: "Kazakhstani Tenge",
    dec: 2,
    lat: 48,
    lon: 68
  },
  {
    country: "KE",
    code: "KES",
    symbol: "Ksh",
    name: "Kenyan Shilling",
    dec: 2,
    lat: 1,
    lon: 38
  },
  {
    country: "KI",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: 1.4167,
    lon: 173
  },
  {
    country: "KR",
    code: "KRW",
    symbol: "\u20A9",
    name: "South Korean Won",
    dec: 0,
    lat: 37,
    lon: 127.5
  },
  {
    country: "KW",
    code: "KWD",
    symbol: "KD",
    name: "Kuwaiti Dinar",
    dec: 3,
    lat: 29.3375,
    lon: 47.6581
  },
  {
    country: "LV",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 57,
    lon: 25
  },
  {
    country: "LB",
    code: "LBP",
    symbol: "LB\xA3",
    name: "Lebanese Pound",
    dec: 0,
    lat: 33.8333,
    lon: 35.8333
  },
  {
    country: "LY",
    code: "LYD",
    symbol: "LD",
    name: "Libyan Dinar",
    dec: 3,
    lat: 25,
    lon: 17
  },
  {
    country: "LI",
    code: "CHF",
    symbol: "CHF",
    name: "Swiss Franc",
    dec: 2,
    lat: 47.1667,
    lon: 9.5333
  },
  {
    country: "LT",
    code: "LTL",
    symbol: "Lt",
    name: "Lithuanian Litas",
    dec: 2,
    lat: 56,
    lon: 24
  },
  {
    country: "LU",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 49.75,
    lon: 6.1667
  },
  {
    country: "MO",
    code: "MOP",
    symbol: "MOP$",
    name: "Macanese Pataca",
    dec: 2,
    lat: 22.1667,
    lon: 113.55
  },
  {
    country: "MK",
    code: "MKD",
    symbol: "MKD",
    name: "Macedonian Denar",
    dec: 2,
    lat: 41.8333,
    lon: 22
  },
  {
    country: "MG",
    code: "MGA",
    symbol: "MGA",
    name: "Malagasy Ariary",
    dec: 0,
    lat: -20,
    lon: 47
  },
  {
    country: "MY",
    code: "MYR",
    symbol: "RM",
    name: "Malaysian Ringgit",
    dec: 2,
    lat: 2.5,
    lon: 112.5
  },
  {
    country: "ML",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 17,
    lon: -4
  },
  {
    country: "MT",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 35.8333,
    lon: 14.5833
  },
  {
    country: "MH",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 9,
    lon: 168
  },
  {
    country: "MQ",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 14.6667,
    lon: -61
  },
  {
    country: "MU",
    code: "MUR",
    symbol: "MURs",
    name: "Mauritian Rupee",
    dec: 0,
    lat: -20.2833,
    lon: 57.55
  },
  {
    country: "YT",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: -12.8333,
    lon: 45.1667
  },
  {
    country: "MX",
    code: "MXN",
    symbol: "MX$",
    name: "Mexican Peso",
    dec: 2,
    lat: 23,
    lon: -102
  },
  {
    country: "FM",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 6.9167,
    lon: 158.25
  },
  {
    country: "MD",
    code: "MDL",
    symbol: "MDL",
    name: "Moldovan Leu",
    dec: 2,
    lat: 47,
    lon: 29
  },
  {
    country: "MC",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 43.7333,
    lon: 7.4
  },
  {
    country: "ME",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 42,
    lon: 19
  },
  {
    country: "MA",
    code: "MAD",
    symbol: "MAD",
    name: "Moroccan Dirham",
    dec: 2,
    lat: 32,
    lon: -5
  },
  {
    country: "MZ",
    code: "MZN",
    symbol: "MTn",
    name: "Mozambican Metical",
    dec: 2,
    lat: -18.25,
    lon: 35
  },
  {
    country: "MM",
    code: "MMK",
    symbol: "MMK",
    name: "Myanma Kyat",
    dec: 0,
    lat: 22,
    lon: 98
  },
  {
    country: "NA",
    code: "NAD",
    symbol: "N$",
    name: "Namibian Dollar",
    dec: 2,
    lat: -22,
    lon: 17
  },
  {
    country: "NR",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -0.5333,
    lon: 166.9167
  },
  {
    country: "NP",
    code: "NPR",
    symbol: "NPRs",
    name: "Nepalese Rupee",
    dec: 2,
    lat: 28,
    lon: 84
  },
  {
    country: "NL",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 52.5,
    lon: 5.75
  },
  {
    country: "NZ",
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    dec: 2,
    lat: -41,
    lon: 174
  },
  {
    country: "NI",
    code: "NIO",
    symbol: "C$",
    name: "Nicaraguan C\xF3rdoba",
    dec: 2,
    lat: 13,
    lon: -85
  },
  {
    country: "NE",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 16,
    lon: 8
  },
  {
    country: "NG",
    code: "NGN",
    symbol: "\u20A6",
    name: "Nigerian Naira",
    dec: 2,
    lat: 10,
    lon: 8
  },
  {
    country: "NU",
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    dec: 2,
    lat: -19.0333,
    lon: -169.8667
  },
  {
    country: "NF",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -29.0333,
    lon: 167.95
  },
  {
    country: "MP",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 15.2,
    lon: 145.75
  },
  {
    country: "NO",
    code: "NOK",
    symbol: "Nkr",
    name: "Norwegian Krone",
    dec: 2,
    lat: 62,
    lon: 10
  },
  {
    country: "OM",
    code: "OMR",
    symbol: "OMR",
    name: "Omani Rial",
    dec: 3,
    lat: 21,
    lon: 57
  },
  {
    country: "PK",
    code: "PKR",
    symbol: "PKRs",
    name: "Pakistani Rupee",
    dec: 0,
    lat: 30,
    lon: 70
  },
  {
    country: "PW",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 7.5,
    lon: 134.5
  },
  {
    country: "PS",
    code: "ILS",
    symbol: "\u20AA",
    name: "Israeli New Sheqel",
    dec: 2,
    lat: 32,
    lon: 35.25
  },
  {
    country: "PA",
    code: "PAB",
    symbol: "B/.",
    name: "Panamanian Balboa",
    dec: 2,
    lat: 9,
    lon: -80
  },
  {
    country: "PY",
    code: "PYG",
    symbol: "\u20B2",
    name: "Paraguayan Guarani",
    dec: 0,
    lat: -23,
    lon: -58
  },
  {
    country: "PE",
    code: "PEN",
    symbol: "S/.",
    name: "Peruvian Nuevo Sol",
    dec: 2,
    lat: -10,
    lon: -76
  },
  {
    country: "PH",
    code: "PHP",
    symbol: "\u20B1",
    name: "Philippine Peso",
    dec: 2,
    lat: 13,
    lon: 122
  },
  {
    country: "PN",
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    dec: 2,
    lat: -24.7,
    lon: -127.4
  },
  {
    country: "PL",
    code: "PLN",
    symbol: "z\u0142",
    name: "Polish Zloty",
    dec: 2,
    lat: 52,
    lon: 20
  },
  {
    country: "PT",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 39.5,
    lon: -8
  },
  {
    country: "PR",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 18.25,
    lon: -66.5
  },
  {
    country: "QA",
    code: "QAR",
    symbol: "QR",
    name: "Qatari Rial",
    dec: 2,
    lat: 25.5,
    lon: 51.25
  },
  {
    country: "RE",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: -21.1,
    lon: 55.6
  },
  {
    country: "RO",
    code: "RON",
    symbol: "RON",
    name: "Romanian Leu",
    dec: 2,
    lat: 46,
    lon: 25
  },
  {
    country: "RU",
    code: "RUB",
    symbol: "RUB",
    name: "Russian Ruble",
    dec: 2,
    lat: 60,
    lon: 100
  },
  {
    country: "RW",
    code: "RWF",
    symbol: "RWF",
    name: "Rwandan Franc",
    dec: 0,
    lat: -2,
    lon: 30
  },
  {
    country: "PM",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 46.8333,
    lon: -56.3333
  },
  {
    country: "SM",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 43.7667,
    lon: 12.4167
  },
  {
    country: "SA",
    code: "SAR",
    symbol: "SR",
    name: "Saudi Riyal",
    dec: 2,
    lat: 25,
    lon: 45
  },
  {
    country: "SN",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 14,
    lon: -14
  },
  {
    country: "RS",
    code: "RSD",
    symbol: "din.",
    name: "Serbian Dinar",
    dec: 0,
    lat: 44,
    lon: 21
  },
  {
    country: "SG",
    code: "SGD",
    symbol: "S$",
    name: "Singapore Dollar",
    dec: 2,
    lat: 1.3667,
    lon: 103.8
  },
  {
    country: "SK",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 48.6667,
    lon: 19.5
  },
  {
    country: "SI",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 46,
    lon: 15
  },
  {
    country: "SO",
    code: "SOS",
    symbol: "Ssh",
    name: "Somali Shilling",
    dec: 0,
    lat: 10,
    lon: 49
  },
  {
    country: "ZA",
    code: "ZAR",
    symbol: "R",
    name: "South African Rand",
    dec: 2,
    lat: -29,
    lon: 24
  },
  {
    country: "GS",
    code: "GBP",
    symbol: "\xA3",
    name: "British Pound Sterling",
    dec: 2,
    lat: -54.5,
    lon: -37
  },
  {
    country: "ES",
    code: "EUR",
    symbol: "\u20AC",
    name: "Euro",
    dec: 2,
    lat: 40,
    lon: -4
  },
  {
    country: "LK",
    code: "LKR",
    symbol: "SLRs",
    name: "Sri Lankan Rupee",
    dec: 2,
    lat: 7,
    lon: 81
  },
  {
    country: "SD",
    code: "SDG",
    symbol: "SDG",
    name: "Sudanese Pound",
    dec: 2,
    lat: 15,
    lon: 30
  },
  {
    country: "SJ",
    code: "NOK",
    symbol: "Nkr",
    name: "Norwegian Krone",
    dec: 2,
    lat: 78,
    lon: 20
  },
  {
    country: "SE",
    code: "SEK",
    symbol: "Skr",
    name: "Swedish Krona",
    dec: 2,
    lat: 62,
    lon: 15
  },
  {
    country: "CH",
    code: "CHF",
    symbol: "CHF",
    name: "Swiss Franc",
    dec: 2,
    lat: 47,
    lon: 8
  },
  {
    country: "SY",
    code: "SYP",
    symbol: "SY\xA3",
    name: "Syrian Pound",
    dec: 0,
    lat: 35,
    lon: 38
  },
  {
    country: "TW",
    code: "TWD",
    symbol: "NT$",
    name: "New Taiwan Dollar",
    dec: 2,
    lat: 23.5,
    lon: 121
  },
  {
    country: "TZ",
    code: "TZS",
    symbol: "TSh",
    name: "Tanzanian Shilling",
    dec: 0,
    lat: -6,
    lon: 35
  },
  {
    country: "TH",
    code: "THB",
    symbol: "\u0E3F",
    name: "Thai Baht",
    dec: 2,
    lat: 15,
    lon: 100
  },
  {
    country: "TL",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: -8.55,
    lon: 125.5167
  },
  {
    country: "TG",
    code: "XOF",
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    dec: 0,
    lat: 8,
    lon: 1.1667
  },
  {
    country: "TK",
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    dec: 2,
    lat: -9,
    lon: -172
  },
  {
    country: "TO",
    code: "TOP",
    symbol: "T$",
    name: "Tongan Pa\u02BBanga",
    dec: 2,
    lat: -20,
    lon: -175
  },
  {
    country: "TT",
    code: "TTD",
    symbol: "TT$",
    name: "Trinidad and Tobago Dollar",
    dec: 2,
    lat: 11,
    lon: -61
  },
  {
    country: "TN",
    code: "TND",
    symbol: "DT",
    name: "Tunisian Dinar",
    dec: 3,
    lat: 34,
    lon: 9
  },
  {
    country: "TR",
    code: "TRY",
    symbol: "TL",
    name: "Turkish Lira",
    dec: 2,
    lat: 39,
    lon: 35
  },
  {
    country: "TC",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 21.75,
    lon: -71.5833
  },
  {
    country: "TV",
    code: "AUD",
    symbol: "AU$",
    name: "Australian Dollar",
    dec: 2,
    lat: -8,
    lon: 178
  },
  {
    country: "UG",
    code: "UGX",
    symbol: "USh",
    name: "Ugandan Shilling",
    dec: 0,
    lat: 1,
    lon: 32
  },
  {
    country: "UA",
    code: "UAH",
    symbol: "\u20B4",
    name: "Ukrainian Hryvnia",
    dec: 2,
    lat: 49,
    lon: 32
  },
  {
    country: "AE",
    code: "AED",
    symbol: "AED",
    name: "United Arab Emirates Dirham",
    dec: 2,
    lat: 24,
    lon: 54
  },
  {
    country: "GB",
    code: "GBP",
    symbol: "\xA3",
    name: "British Pound Sterling",
    dec: 2,
    lat: 54,
    lon: -2
  },
  {
    country: "US",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 38,
    lon: -97,
    unit: "GAL"
  },
  {
    country: "UM",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 19.2833,
    lon: 166.6
  },
  {
    country: "UY",
    code: "UYU",
    symbol: "$U",
    name: "Uruguayan Peso",
    dec: 2,
    lat: -33,
    lon: -56
  },
  {
    country: "UZ",
    code: "UZS",
    symbol: "UZS",
    name: "Uzbekistan Som",
    dec: 0,
    lat: 41,
    lon: 64
  },
  {
    country: "VE",
    code: "VEF",
    symbol: "Bs.F.",
    name: "Venezuelan Bol\xEDvar",
    dec: 2,
    lat: 8,
    lon: -66
  },
  {
    country: "VN",
    code: "VND",
    symbol: "\u20AB",
    name: "Vietnamese Dong",
    dec: 0,
    lat: 16,
    lon: 106
  },
  {
    country: "VG",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 18.5,
    lon: -64.5
  },
  {
    country: "VI",
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    dec: 2,
    lat: 18.3333,
    lon: -64.8333
  },
  {
    country: "EH",
    code: "MAD",
    symbol: "MAD",
    name: "Moroccan Dirham",
    dec: 2,
    lat: 24.5,
    lon: -13
  },
  {
    country: "YE",
    code: "YER",
    symbol: "YR",
    name: "Yemeni Rial",
    dec: 0,
    lat: 15,
    lon: 48
  },
  {
    country: "ZM",
    code: "ZMK",
    symbol: "ZK",
    name: "Zambian Kwacha",
    dec: 0,
    lat: -15,
    lon: 30
  },
  {
    country: "AF",
    code: "AFN",
    symbol: "Af",
    name: "Afghan Afghani",
    dec: 0,
    lat: 33,
    lon: 65
  }
];

// app/statics/json/mocked-rates.json
var AED = 3.671662;
var AFN = 88.379525;
var ALL = 110.574067;
var AMD = 488.393575;
var ANG = 1.801134;
var AOA = 449.61965;
var ARS = 110.762598;
var AUD = 1.330733;
var AWG = 1.799911;
var AZN = 1.69973;
var BAM = 1.769287;
var BBD = 2.00025;
var BDT = 86.138036;
var BGN = 1.765024;
var BHD = 0.377258;
var BIF = 2033.772076;
var BMD = 1.000308;
var BND = 1.358971;
var BOB = 6.868879;
var BRL = 4.755764;
var BSD = 1.000246;
var BTC = 21e-6;
var BTN = 75.920317;
var BWP = 11.470079;
var BYN = 3.254048;
var BZD = 2.01408;
var CAD = 1.249728;
var CDF = 2003.618822;
var CHF = 0.931096;
var CLF = 0.028223;
var CLP = 780.606848;
var CNH = 6.372363;
var CNY = 6.3614;
var COP = 3769.297613;
var CRC = 654.720931;
var CUC = 1.000366;
var CUP = 25.737845;
var CVE = 99.904177;
var CZK = 22.069338;
var DJF = 177.867434;
var DKK = 6.705956;
var DOP = 54.886764;
var DZD = 142.861038;
var EGP = 18.311398;
var ERN = 14.993123;
var ETB = 51.165943;
var EUR = 0.902313;
var FJD = 2.095303;
var FKP = 0.764226;
var GBP = 0.764349;
var GEL = 3.138988;
var GGP = 0.764041;
var GHS = 7.564359;
var GIP = 0.764254;
var GMD = 53.725263;
var GNF = 8913.083283;
var GTQ = 7.676512;
var GYD = 209.004457;
var HKD = 7.824627;
var HNL = 24.384252;
var HRK = 6.834424;
var HTG = 106.392556;
var HUF = 331.401635;
var IDR = 14331.374883;
var ILS = 3.191768;
var IMP = 0.764446;
var INR = 75.632311;
var IQD = 1458.534883;
var IRR = 42230.181924;
var ISK = 127.640566;
var JEP = 0.764358;
var JMD = 153.434374;
var JOD = 0.709134;
var JPY = 122.828756;
var KES = 114.809143;
var KGS = 98.544917;
var KHR = 4046.750737;
var KMF = 444.167522;
var KPW = 899.577907;
var KRW = 1209.184915;
var KWD = 0.303973;
var KYD = 0.83234;
var KZT = 467.177975;
var LAK = 11710.885935;
var LBP = 1515.917329;
var LKR = 295.700982;
var LRD = 152.928928;
var LSL = 14.608665;
var LYD = 4.672296;
var MAD = 9.665781;
var MDL = 18.281549;
var MGA = 4019.375909;
var MKD = 56.122736;
var MMK = 1776.349349;
var MNT = 2896.392961;
var MOP = 8.055677;
var MRU = 36.383594;
var MUR = 44.630111;
var MVR = 15.443137;
var MWK = 816.524036;
var MXN = 19.963867;
var MYR = 4.211897;
var MZN = 63.81264;
var NAD = 14.598163;
var NGN = 415.565261;
var NIO = 35.714183;
var NOK = 8.678041;
var NPR = 121.472069;
var NZD = 1.440885;
var OMR = 0.385036;
var PAB = 1.000449;
var PEN = 3.727625;
var PGK = 3.510814;
var PHP = 51.956224;
var PKR = 182.354899;
var PLN = 4.199811;
var PYG = 6966.939043;
var QAR = 3.639869;
var RON = 4.459612;
var RSD = 106.130804;
var RUB = 87.459866;
var RWF = 1015.860218;
var SAR = 3.751674;
var SBD = 8.018949;
var SCR = 14.410243;
var SDG = 447.290092;
var SEK = 9.322841;
var SGD = 1.356655;
var SHP = 0.76373;
var SLL = 11749.986241;
var SOS = 580.217675;
var SRD = 20.670109;
var SSP = 130.199743;
var STD = 21433.182111;
var STN = 22.340033;
var SVC = 8.741486;
var SYP = 2510.822091;
var SZL = 14.613023;
var THB = 33.454731;
var TJS = 12.917472;
var TMT = 3.498897;
var TND = 2.93666;
var TOP = 2.254245;
var TRY = 14.580932;
var TTD = 6.788002;
var TWD = 28.631327;
var TZS = 2319.912306;
var UAH = 29.370953;
var UGX = 3591.451859;
var USD = 1;
var UYU = 41.449945;
var UZS = 11446.628447;
var VES = 4.363177;
var VND = 22856.870513;
var VUV = 113.095437;
var WST = 2.60272;
var XAF = 591.34021;
var XAG = 0.040734;
var XAU = 1542e-6;
var XCD = 2.701712;
var XDR = 0.719095;
var XOF = 591.340756;
var XPD = 1374e-6;
var XPF = 107.577499;
var XPT = 1633e-6;
var YER = 250.133287;
var ZAR = 14.52282;
var ZMW = 17.982394;
var ZWL = 321.849318;
var mocked_rates_default = {
  AED,
  AFN,
  ALL,
  AMD,
  ANG,
  AOA,
  ARS,
  AUD,
  AWG,
  AZN,
  BAM,
  BBD,
  BDT,
  BGN,
  BHD,
  BIF,
  BMD,
  BND,
  BOB,
  BRL,
  BSD,
  BTC,
  BTN,
  BWP,
  BYN,
  BZD,
  CAD,
  CDF,
  CHF,
  CLF,
  CLP,
  CNH,
  CNY,
  COP,
  CRC,
  CUC,
  CUP,
  CVE,
  CZK,
  DJF,
  DKK,
  DOP,
  DZD,
  EGP,
  ERN,
  ETB,
  EUR,
  FJD,
  FKP,
  GBP,
  GEL,
  GGP,
  GHS,
  GIP,
  GMD,
  GNF,
  GTQ,
  GYD,
  HKD,
  HNL,
  HRK,
  HTG,
  HUF,
  IDR,
  ILS,
  IMP,
  INR,
  IQD,
  IRR,
  ISK,
  JEP,
  JMD,
  JOD,
  JPY,
  KES,
  KGS,
  KHR,
  KMF,
  KPW,
  KRW,
  KWD,
  KYD,
  KZT,
  LAK,
  LBP,
  LKR,
  LRD,
  LSL,
  LYD,
  MAD,
  MDL,
  MGA,
  MKD,
  MMK,
  MNT,
  MOP,
  MRU,
  MUR,
  MVR,
  MWK,
  MXN,
  MYR,
  MZN,
  NAD,
  NGN,
  NIO,
  NOK,
  NPR,
  NZD,
  OMR,
  PAB,
  PEN,
  PGK,
  PHP,
  PKR,
  PLN,
  PYG,
  QAR,
  RON,
  RSD,
  RUB,
  RWF,
  SAR,
  SBD,
  SCR,
  SDG,
  SEK,
  SGD,
  SHP,
  SLL,
  SOS,
  SRD,
  SSP,
  STD,
  STN,
  SVC,
  SYP,
  SZL,
  THB,
  TJS,
  TMT,
  TND,
  TOP,
  TRY,
  TTD,
  TWD,
  TZS,
  UAH,
  UGX,
  USD,
  UYU,
  UZS,
  VES,
  VND,
  VUV,
  WST,
  XAF,
  XAG,
  XAU,
  XCD,
  XDR,
  XOF,
  XPD,
  XPF,
  XPT,
  YER,
  ZAR,
  ZMW,
  ZWL
};

// route:/Users/felixgourdeau/repos/unitsguru/app/routes/gas/index.tsx
var loader = async () => {
  const rates = mocked_rates_default;
  const currencies = Object.keys(rates).map((currencyAbbreviation) => {
    const data = currency_data_default.find((entry2) => entry2.code === currencyAbbreviation);
    if (!data)
      return void 0;
    const { code, symbol, name, dec, unit } = data || {};
    return { code, symbol, name, dec, unit: unit || "L" };
  }).filter(Boolean);
  return (0, import_remix6.json)({ rates, currencies });
};
function CatchBoundary2() {
  const caught = (0, import_remix6.useCatch)();
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", null, caught.status, " ", caught.statusText));
}
var gas_default = () => {
  const { rates, currencies } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ import_react6.default.createElement(FuelPriceConverter, {
    rates,
    currencies
  });
};

// route:/Users/felixgourdeau/repos/unitsguru/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => App2,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader2 = async () => {
  console.log("PROUTEEEE1");
  return (0, import_remix7.json)({});
};
function App2() {
  console.log("PROUTEEEE");
  return /* @__PURE__ */ React.createElement(import_remix7.Outlet, null);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ff8e73ca", "entry": { "module": "/_static/.remix/entry.client-F546FHO2.js", "imports": ["/_static/.remix/_shared/chunk-U3IK36DW.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/.remix/root-WBNU3IJQ.js", "imports": ["/_static/.remix/_shared/chunk-SDGAZYSZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/_static/.remix/routes/about/index-E6XIC5RC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/gas/index": { "id": "routes/gas/index", "parentId": "root", "path": "gas", "index": true, "caseSensitive": void 0, "module": "/_static/.remix/routes/gas/index-3O7E2AGD.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/.remix/routes/index-CBHDH3D4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/.remix/manifest-FF8E73CA.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/gas/index": {
    id: "routes/gas/index",
    parentId: "root",
    path: "gas",
    index: true,
    caseSensitive: void 0,
    module: gas_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
