# Dad Joke Showdown

[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/kunala23/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/kunala23/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

An entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun.

## What it does

The program writes one dad joke to `/output/entry.txt` — a single text of
at most 200 characters, nothing more. The joke is fixed in `main.ts`: a
three-line exchange about a band called 1023 Megabytes, where the punchline
turns on the double meaning of "gig" — a gigabyte, and a live performance.
Setup, straight-faced delivery, and the turn lands on the last line, the way
a dad joke is supposed to be told out loud at the table.

## How to run it

Requires Node.js 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
```

That writes the joke to `/output/entry.txt`. The program checks the joke is
between 1 and 200 characters first, and refuses to write anything longer.
`OUTPUT_DIR` can override the output directory (it defaults to `/output`).

## The joke

> I told my wife I was starting a band called 1023 Megabytes. She said,
> 'You'll never get a gig.' I said, 'Exactly — we haven't got one yet.'

139 characters — inside the 200-character gate.

## License

MIT — see [LICENSE](LICENSE).
