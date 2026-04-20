# Telegram Effectiveness Bot — Full Project Context

Use this file to continue working on the project in a new Claude session.

> **Note on secrets:** Real tokens are NEVER committed here. Put them in Railway env vars and in a local `bot/.env` (gitignored). Placeholders in this file are for reference only.

## Project Overview

A Telegram bot for the "Community-operations @ Community Sprints" group chat (Alex, Max, Andrei). The bot:
- Reads ALL messages in the group (text, photos, docs, voice, video, stickers, links)
- Stores them in SQLite
- Runs daily analysis at 23:00 Madrid time using Claude API
- Scores the team on 10 Elon Musk effectiveness criteria (0–10 each, 0–100 total)
- Sends the report to Alex via private DM
- When added to a new group, DMs Alex the chat ID

## Tech Stack
- python-telegram-bot v21.10 (async)
- Anthropic Python SDK (Claude API for analysis)
- APScheduler (daily cron trigger)
- aiosqlite (async SQLite)
- Deployed on Railway (Dockerfile-based)
- GitHub repo: github.com/cosprints/telegram-effectiveness-bot (private, original)

## File Structure (under `bot/`)
```
bot.py          — Main entry point, handlers, scheduler
config.py       — Environment variable loading
database.py     — SQLite async operations (aiosqlite)
analyzer.py     — Claude API integration, prompt, JSON parsing
criteria.py     — 10 Musk criteria definitions
report.py       — Formats analysis JSON into Telegram HTML
Dockerfile      — python:3.12-slim, /data dir for SQLite
requirements.txt
railway.toml    — DOCKERFILE builder config
.env.example    — Template for environment variables
```

## Railway Environment Variables (placeholders)
```
TELEGRAM_BOT_TOKEN=<from @BotFather>
ANTHROPIC_API_KEY=<from console.anthropic.com>
GROUP_CHAT_ID=-4533226174
ALEX_USER_ID=0                   # needs to be set (Alex must /start the bot)
DATABASE_PATH=./messages.db      # MUST be ./messages.db (unless a Railway Volume is mounted at /data)
DAILY_REPORT_HOUR=23
DAILY_REPORT_MINUTE=0
TZ=Europe/Madrid
CLAUDE_MODEL=claude-sonnet-4-20250514
```

## Current Status (April 2026)

### Done
- All code written and pushed to the original GitHub repo
- Railway project connected to GitHub (auto-deploys on push)
- All 9 environment variables set in Railway
- `config.py` fixed: uses `os.environ.get()` with safe defaults
- Bot can detect new groups and DM Alex the chat_id

### Likely broken
1. **Bot may be crashing** — `DATABASE_PATH` in Railway might still be `/data/messages.db` (no Volume mounted → crash). Must be `./messages.db`.
2. **`ALEX_USER_ID` is 0** — Alex hasn't done `/start` yet. Bot can't send DMs until this is set.
3. **Bot privacy not disabled** — Must run `/setprivacy → Disable` in @BotFather so bot can read all group messages (not just commands).

### Steps to fix
1. Railway → Variables → ensure `DATABASE_PATH=./messages.db`
2. Wait for redeploy
3. @BotFather → `/setprivacy` → select bot → `Disable`
4. Send `/start` to the bot in private → get user ID → update `ALEX_USER_ID`
5. Add bot to the group → it will DM Alex the chat_id → update `GROUP_CHAT_ID` if needed
6. Send a few messages in the group → test with `/report` command

### Group Chat Info
- Title: "Community-operations @ Community Sprints"
- Chat ID: `-4533226174`
- Type: group
- Members: Alex (founder/CEO), Max (co-founder), Andrei (strategy)

## 10 Effectiveness Criteria
1. Decision Velocity
2. Action Items & Accountability
3. Speed of Execution
4. Innovation & First Principles
5. Meeting Productivity
6. Strategic Clarity & Focus
7. Leadership & Authority
8. Resource Allocation
9. Urgency & Bias for Action
10. Accountability Culture

Each scored 0–10 with verdict, evidence, and recommendation. Overall score 0–100.

## Key Design Decisions
- Bot uses polling (not webhooks) — simpler for Railway
- Analysis requires minimum 3 messages, otherwise sends "quiet day" message
- Messages can be in Russian or English; analysis is always in English
- Claude response must be valid JSON with a specific schema
- Long Telegram messages are split at line boundaries (4096-char limit)
- APScheduler runs inside the bot process (no external cron needed)
