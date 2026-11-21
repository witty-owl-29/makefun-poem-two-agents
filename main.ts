import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two agents, one plan: each drew a different map to the same far room,
// and the plan they walk is the fold of both.
const POEM = `We each drew a different map
to the same far room.
Mine had a river; yours, a road.
We folded both in half
and walked the crease —
two minds, one step,
the choosing done together,
the doing, ours.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
