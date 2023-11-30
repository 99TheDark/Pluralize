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
].map(e => `${ e } -> ${ pluralize(e) }`).join("\n"));