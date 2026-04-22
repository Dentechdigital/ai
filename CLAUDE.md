# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repo contains a single-file web game: `tictactoe.html`. There is no build system, package manager, or server — open the file directly in a browser to run it.

## Architecture

Everything lives in `tictactoe.html`:

- **CSS** (inline `<style>`) — dark-theme layout, board grid, cell states (`.x`, `.o`, `.taken`, `.winning`), and pulse animation for the winning line.
- **HTML** — static 3×3 grid of `.cell` divs with `data-i` indices (0–8), a status bar, mode toggle button, restart button, and scoreboard.
- **JavaScript** (inline `<script>`) — all game logic:
  - `board` — flat 9-element array (`null | 'X' | 'O'`)
  - `checkWinner(b)` — checks all 8 win lines; returns `{ winner, line }` or `{ winner: 'draw' }` or `null`
  - `humanMove(idx)` / `applyMove(idx, player)` — handle player clicks and DOM updates
  - `minimax(b, isMax, alpha, beta)` — alpha-beta pruned minimax for the CPU opponent (plays as `'O'`)
  - `aiMove()` — picks the best move via minimax and applies it
  - `vsAI` flag — toggled by the "vs CPU / vs Human" button; resets scores on switch

## Commit conventions

Each logical change gets its own commit with a `type: short description` subject line (e.g. `feat:`, `fix:`, `style:`) so individual changes can be reverted cleanly with `git revert <hash>`.
