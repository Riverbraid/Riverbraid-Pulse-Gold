export const PETAL = "Pulse-Gold";
export const INVARIANT = "PULSE_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "pulse-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Pulse-Gold" &&
    input.petal === "Pulse-Gold" &&
    input.ring === 1 &&
    input.invariant === "PULSE_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "pulse-gold:STATIONARY" : "pulse-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
