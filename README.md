# discord-slash-week
To solve a very specific, extremely stupid problem with "is it this week or next week"

Created to help bi-weekly D&D groups that keep getting the weeks shifted

/checkweek - is the game this week or next week?
/nextweek - shift the schedule by one week

Since it was modified to be specific by-guild
[Invite Link](https://dndthisweek.mchang.workers.dev/invite)

# Selfhosting
- change `wrangler.toml` to reflect your Cloudflare account, route and kv ID
- fill in `wrangler secret put` with:
  - your Client ID in `CLIENT_ID`
  - public key in `CLIENT_PUBLIC_KEY` 
- add `CF_API_TOKEN` to Github Secrets

`/checkweek` will return an error the first time since there is not week value for your guild, just do /nextweek to set it.