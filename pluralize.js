function end(str, count) {
    return str.substring(str.length - count, str.length)
}

function replaceEnd(str, count, end) {
    return str.substring(0, str.length - count) + end;
}

export function pluralize(str) {
    if(end(str, 2) == "us") {
        return replaceEnd(str, 2, "i");
    } else if(["s", "x"].includes(end(str, 1))) {
        return str + "es";
    } else {
        return str + "s";
    }
}