// Wood type fills the measure. Each display line is sized in pure CSS as
// `calc(100cqi / ratio)`, where ratio is the line's width at font-size 1 in
// its face. CSS sizing (rather than measuring in the browser) means no layout
// shift when the fonts swap in.
//
// Ratios measured in Chrome against the Google Fonts files that next/font
// self-hosts: League Gothic at wdth 100 and 80, Holtwood One SC. Letter
// spacing 0, default kerning, uppercase text. Re-measure if a line's words
// change: fitRatio() throws on any line it doesn't know.

const gothic100: Record<string, number> = {
  "BLOCKED? LEAKING?": 5.6231,
  "NO HOT WATER? GAS?": 5.8681,
  "CALL 0447 798 126": 5.0961,
  "BLOCKED?": 2.792,
  "LEAKING?": 2.677,
  "NO HOT WATER?": 4.2911,
  "CALL": 1.337,
  "0447 798 126": 3.605,
  "BLOCKED DRAINS": 4.642,
  "HOT WATER": 3.0411,
  "GAS FITTING & LPG": 5.082,
  "LEAKS, TAPS & PIPES": 5.68,
  "RENOVATIONS & NEW BUILDS": 7.7531,
  "RENOVATIONS &": 4.2861,
  "NEW BUILDS": 3.3131,
  "COMMERCIAL": 3.5981,
  "CAMPBELLTOWN": 4.4111,
  "MACARTHUR · CAMDEN · NARELLAN": 9.417,
  "LIVERPOOL · SOUTH WEST SYDNEY": 9.0461,
  "MACARTHUR · CAMDEN": 6.152,
  "NARELLAN · LIVERPOOL": 6.157,
  "SOUTH WEST SYDNEY": 5.7411,
  "WHAT'S PLAYING UP?": 5.7481,
};

const gothic80: Record<string, number> = {
  "BLOCKED? LEAKING?": 4.1395,
  "NO HOT WATER? GAS?": 4.2945,
  "CALL 0447 798 126": 3.8016,
  "BLOCKED?": 2.065,
  "LEAKING?": 1.9575,
  "NO HOT WATER?": 3.12,
  "CALL": 0.9961,
  "0447 798 126": 2.6886,
  "BLOCKED DRAINS": 3.4211,
  "HOT WATER": 2.212,
  "GAS FITTING & LPG": 3.7845,
  "LEAKS, TAPS & PIPES": 4.2709,
  "RENOVATIONS & NEW BUILDS": 5.6886,
  "RENOVATIONS &": 3.13,
  "NEW BUILDS": 2.4416,
  "COMMERCIAL": 2.5861,
  "CAMPBELLTOWN": 3.2166,
  "MACARTHUR · CAMDEN": 4.4611,
  "NARELLAN · LIVERPOOL": 4.5275,
  "SOUTH WEST SYDNEY": 4.2391,
  "WHAT'S PLAYING UP?": 4.2711,
};

const slab: Record<string, number> = {
  "LICENSED PLUMBERS · CAMPBELLTOWN TO SYDNEY": 32.6417,
  "LICENSED PLUMBERS": 13.1709,
  "CAMPBELLTOWN TO SYDNEY": 18.4713,
  "WHAT'S PLAYING UP?": 13.9405,
  "WHAT WE DO": 8.9288,
  "OUR WORK": 7.3873,
  "WHERE WE WORK": 12.1061,
  "AND FURTHER INTO SYDNEY, DEPENDING ON THE JOB": 34.3327,
};

export type Face = "gothic" | "gothic-condensed" | "slab";

export function fitRatio(text: string, face: Face = "gothic"): number {
  const table = face === "slab" ? slab : face === "gothic-condensed" ? gothic80 : gothic100;
  const ratio = table[text.toUpperCase()];
  if (ratio === undefined) {
    throw new Error(`No measured fit ratio for "${text}" in ${face}. Measure it and add it to src/lib/fit.ts.`);
  }
  return ratio;
}
