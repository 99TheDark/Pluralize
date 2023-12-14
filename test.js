import {pluralize} from "./pluralize.js"

console.log([
    "cactus",
    "towel",
    "shore",
    "octopus",
    "tangent",
    "radius",
    "skill",
    "tone",
    "score",
    "ski",
    "antithesis",
    "quarter",
    "parenthesis"
].map(e => `${ e } -> ${ pluralize(e) }`).join("\n"));