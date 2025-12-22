# Leaderboard Examples

Two leaderboard viewer examples that demonstrate the EchoVRCE leaderboard APIs.

## Files

| File | Description |
|------|-------------|
| [records.html](records.html) | View leaderboard rankings by stat name and rank range |
| [haystack.html](haystack.html) | Find a user's rank and see nearby players |

## Features

Both examples include:
- **User Lookup**: Search by username, Discord ID, or UUID
- **Stat Configuration**: Choose stat name and reset schedule (daily/weekly/monthly/all-time)
- **Pagination**: Navigate through leaderboard pages
- **Raw API Link**: View the raw API response
- **Shared Theme**: Uses the EchoVRCE color palette

## Usage

### Records View (`records.html`)

View a ranked list of players for any stat:

1. Enter a **Stat Name** (e.g., "Goals", "Saves", "Points")
2. Optionally enter a username to highlight in results
3. Select a **Reset Schedule** (all-time, daily, weekly, monthly)
4. Adjust **From Rank** and **Limit** as needed
5. Click **Fetch Leaderboard**

### Haystack View (`haystack.html`)

Find a specific user and see their neighbors on the leaderboard:

1. Enter a **Username**, **Discord ID**, or **UUID** (required)
2. Enter a **Stat Name** (required)
3. Select a **Reset Schedule**
4. Click **Find User**

The target user will be highlighted in the results with their neighbors shown above and below.

## URL Parameters

For backwards compatibility, both pages support URL query parameters:

```
?stat_name=Goals&reset_schedule=weekly
```

You can also use the URL hash to pre-fill the user search:

```
haystack.html#username
records.html#username
```

## API Endpoints

- **Records**: `GET /leaderboard/records` - Get ranked list from a specific rank
- **Haystack**: `GET /leaderboard/haystack` - Get a user's rank and neighbors
- **Account Lookup**: `GET /account/lookup` - Resolve username/Discord ID to user info
