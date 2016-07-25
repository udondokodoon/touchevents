"use strict";
const xstream_1 = require("xstream");
const xstream_run_1 = require("@cycle/xstream-run");
const dom_1 = require("@cycle/dom");
function main() {
    const sinks = {
        DOM: xstream_1.default.periodic(1000).map(i => dom_1.h1('' + i + " seconds elapsed"))
    };
    return sinks;
}
const drivers = {
    DOM: dom_1.makeDOMDriver("#app")
};
xstream_run_1.run(main, drivers);
