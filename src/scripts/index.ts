/**
 * TODO(@Isha) refactor this to no longer be global but App properties.
 * Will be done after the major player refactor.
 */
let player;
let game;

interface JQuery {
    animateNumber(options: object): void;
}

/**
 * Start the application when all html elements are loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    App.start()
});
