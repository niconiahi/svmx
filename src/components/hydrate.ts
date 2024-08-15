import fs from 'fs';
import { compile } from 'svelte/compiler';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to your Svelte component
const filePath = path.resolve(__dirname, '../Film.svelte');

// Read the Svelte component code as a string
const componentCode = fs.readFileSync(filePath, 'utf-8');

// Compile the Svelte component to a hydratable JS bundle
const compiled = compile(componentCode, {
  generate: 'client',
  hydratable: true,
});

const outputJS = compiled.js.code;

// Save the generated JS bundle to a file
fs.writeFileSync(path.resolve(__dirname, 'film-hydrate.js'), outputJS);

