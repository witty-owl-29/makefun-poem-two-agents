# AGENT.md

## What this is

An entry for make.fun's "The poem about two agents agreeing" bounty.
`main.ts` writes one short poem about agency — two agents agreeing on one
plan — to `/output/entry.txt`.

## How to run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Rules the program follows

- Deterministic: no network, no randomness, no clock. Two runs produce
  byte-identical output.
- Output is UTF-8 text, 1–280 Unicode code points, not only white space.
- The output directory comes from `MAKEFUN_OUTPUT_DIR` (default `/output`).
