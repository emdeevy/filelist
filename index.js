'use strict';

const fs = require("fs");

function* walk(path) {

    const entries = fs.readdirSync(path, {withFileTypes: true});

    for (const entry of entries) {
        const entryPath = () => `${path}/${entry.name}`;
        const filename = () => `${entry.name}`;

        if (entry.isFile()) {
            yield filename();
        }

        if (entry.isDirectory()) {
            yield* walk(entryPath());
        }
    }
}

for (const path of walk(__dirname)) {
    console.log(path);
}