# HTML Examples

This directory contains HTML/JavaScript examples demonstrating API usage.

## Examples

| Example | Description |
|---------|-------------|
| [leaderboard](leaderboard/) | Leaderboard views with user lookup |
| [matchmakerstatus](matchmakerstatus/) | Display matchmaker queue status |
| [matchresults](matchresults/) | Query and display match results via GraphQL |
| [playerloudness](playerloudness/) | Player voice chat loudness indicator |
| [minimap](minimap/) | Real-time 2D arena minimap with WebSocket streaming |

## Getting Started

1. Open any `.html` file in a web browser
2. Follow the instructions in the example

## Minimap Example

The [minimap](minimap/) example demonstrates:
- WebSocket connection to the nevr-agent streaming API
- Real-time 2D rendering of the Echo Arena
- Player positions with jersey numbers
- Team scores and game clock
- Playback controls (play/pause, seek, rewind)

**Requirements:**
- Running nevr-agent API server with WebSocket streaming enabled
- Active match or recorded match being replayed

## Adding Examples

To add a new example:

1. Create a new directory with a descriptive name
2. Include `index.html` as the main entry point
3. Include inline JavaScript or reference external JS files
4. Add comments explaining what the example demonstrates
