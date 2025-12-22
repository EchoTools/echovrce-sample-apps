/**
 * Shared leaderboard utilities for EchoVRCE sample apps.
 */

// Constants for score decoding
const LEADERBOARD_SCORE_SCALING_FACTOR = 1e9;
const SCORE_OFFSET = 1e15;

/**
 * Converts two leaderboard values back into a float, supporting negative numbers.
 * This is the inverse operation of Float64ToScore.
 *
 * @param {number} score - The primary leaderboard score field (must be non-negative)
 * @param {number} subscore - The secondary leaderboard score field (must be 0 <= subscore < 1e9)
 * @returns {number} The original float value (within precision limits)
 *
 * @example
 * scoreToFloat64(999999999999997, 499999999) // -> -2.5
 * scoreToFloat64(1000000000000000, 0)        // -> 0.0
 * scoreToFloat64(1000000000000001, 700000000) // -> 1.7
 */
function scoreToFloat64(score, subscore) {
  // Validate input ranges
  if (score < 0) {
    console.error(`Invalid score: ${score} (must be non-negative)`);
    return 0;
  }
  if (subscore < 0 || subscore > LEADERBOARD_SCORE_SCALING_FACTOR) {
    console.error(`Invalid subscore: ${subscore}`);
    return 0;
  }

  const fracScale = LEADERBOARD_SCORE_SCALING_FACTOR;
  const scoreOffset = SCORE_OFFSET;

  // Fix for corrupted scores due to 'incr' operator usage
  if (score >= 2 * scoreOffset) {
    score = scoreOffset + (score % scoreOffset);
  }

  if (score < scoreOffset) {
    // Negative number: score in range [0, scoreOffset)
    const intPart = scoreOffset - 1 - score; // Convert back to magnitude

    // Handle exact integers vs fractional values
    let fracPart;
    if (subscore === fracScale) {
      fracPart = 0.0;
    } else {
      fracPart = 1.0 - subscore / (fracScale - 1); // Uninvert the fractional part
    }

    return -(intPart + fracPart);
  } else {
    // Zero or positive number: score in range [scoreOffset, ∞)
    const intPart = score - scoreOffset; // Remove offset
    const fracPart = subscore / fracScale;
    return intPart + fracPart;
  }
}

/**
 * Format a decoded score for display.
 *
 * @param {number} score - Raw score from API
 * @param {number} subscore - Raw subscore from API
 * @param {number} [precision=4] - Number of decimal places (trailing zeros removed)
 * @returns {string} Formatted score string
 */
function formatDecodedScore(score, subscore, precision = 4) {
  const decoded = scoreToFloat64(score, subscore);
  // Format with specified precision, removing trailing zeros
  return decoded.toFixed(precision).replace(/\.?0+$/, "");
}
