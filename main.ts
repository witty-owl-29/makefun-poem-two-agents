import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two agents, one plan: each drew a different map to the same far room,
// and the plan they walk is the fold of both — a third road neither drew alone.
const POEM = `We each drew a different map
to the same far room.
Mine had a river; yours, a road.
We folded both in half
and walked the crease.
Not your road. Not my river.
So we walk the one
neither of us drew alone.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
