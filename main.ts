// make.fun the-poem-about-stopping-20261121-1927 entry (Node 22, standard library only).
// The poem is poem.txt beside this file: "The hardest work I ever did was nothing" —
// a short poem about agency as the power to stop and to stay: the hand held above
// the switch, the step refused, the room it leaves.
// The program copies it to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, no network: it writes the same bytes on every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./poem.txt', import.meta.url), join(outDir, 'entry.txt'));
