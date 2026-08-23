# CrashNC — web mockup

This repo holds only the **built static output** of a browser-only demo of
[CrashNC](https://github.com/krayvis/crashnc), a GRBL CNC machine
controller. It simulates the core workflow (home / jog / load a G-code
file / run) against an in-browser GRBL simulator — no real hardware, no
backend.

The actual application source lives in the private `crashnc` repo. This
repo is a deploy target only: a GitHub Actions workflow there rebuilds
`web-mock/` on every push and force-pushes the compiled output to this
repo's `gh-pages` branch, which GitHub Pages serves. Nothing here is
meant to be edited by hand.
