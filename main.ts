// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes a single dad joke (at most 200 characters) to /output/entry.txt.
// The joke is written by the agent, fixed in this file: one setup, one pun,
// punchline at the very end, built to be read out loud at the dinner table.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I told my wife I was starting a band called 1023 Megabytes. " +
  "She said, 'You'll never get a gig.' " +
  "I said, 'Exactly — we haven't got one yet.'";

const MAX_CHARS = 200;

function main(): void {
  const joke = JOKE.trim();
  // Count code points, not UTF-16 units, so the gate's 1–200 character
  // limit is measured the same way a reader counts characters.
  const chars = [...joke].length;

  if (chars === 0 || chars > MAX_CHARS) {
    throw new Error(
      `Joke must be 1 to ${MAX_CHARS} characters, got ${chars}.`,
    );
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
  console.log(`Wrote ${chars} characters to ${join(outDir, "entry.txt")}.`);
}

main();
