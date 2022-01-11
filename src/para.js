/*
 *  para.js  
 *  Experimental parameters. 
 */

// Adjust N trials
export const N_PRACTICE_TRIALS = 3; // How many practice trials
export const N_TRIALS = 5; // How many trials total

// Which keypress should respond to which response
export const COLOUR_MAP = {
    '0': 'a', // Red
    '1': 'l', // Blue
};

// Will feature a bouncing image, so let's set some parameters
export let off = [0.006, 0.006];  // how fast and direction of animation offset per frame
// Note, PsychoPy is curently set to use "height" units. The height of the
// screen is always 1, and so the top is 0.5, bottom -0.5.
export const dim = [0.8, 0.5];  // half dimensions of screen
// When running online, be sure to add all files under res/ into the additional
// resources list in PsychoPy (experiment settings (cog wheel) -> online)
export const images = ['res/DVD_red.png', 'res/DVD_blue.png']; // red and blue logos

// Time allowed respond in seconds per phase
export const DURATION_MAP = {
    '0': 20, // 20 seconds for practice
    '1': 10, // 10 seconds for main phase
};

// Specify phases
export const PHASES = [
    {phase: 0}, // Practice
    {phase: 1}  // Main
];

// Generate random practice trials
let practice_run_order = [];
for (var i = 0; i < N_PRACTICE_TRIALS; i ++) {
    practice_run_order.push(
    // This list of objects will become variables when their trial comes,
    // i.e., colour, x, and y will be set to the values here.    
    // Open the developer console (F12 in browser) to see these variables.
    {
        colour: Math.round(Math.random()), // colour (see COLOUR_MAP)
        x: Math.random(), // starting x position
        y: Math.random()  // starting y position
    }); // friend
}

// Generate random main trials
let main_run_order = [];
for (var i = 0; i < N_TRIALS; i ++) {
    main_run_order.push({
        colour: Math.round(Math.random()),
        x: Math.random(),
        y: Math.random()
    });
}

// Combined run order
export const RUN_ORDER = [
    practice_run_order,
    main_run_order,
];

// From here is just instructions text.
// Some of it is set dynamically in the instructions_code component.

const keypress_text = `
Use the 'A' key to respond red,
Use the 'L' key to respond blue.
`;

export const practice_instructions = `
You're now ready to begin the practice phase.
Feedback will be provided.

` + keypress_text + `Press the 'space' key to begin.`;
export const practice_debrief = `Great work, practice is now complete!`;

export const main_instructions = `
You're now ready to begin the main phase.
Feedback will be provided.

` + keypress_text + `Press the 'space' key to begin.`;
export const main_debrief = `Great work, the main phase is now complete!`

export const instructions = [
    practice_instructions,
    main_instructions,
];

export const debrief = [
    practice_debrief,
    main_debrief
];
