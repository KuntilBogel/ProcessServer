const subsrt = (await import('subsrt')).default;

function conv(input) {
    return subsrt.convert(input, { format: "vtt" })
}

// document.querySelector("#main_vid_dl").href = params.get("videolink")
const params = new URLSearchParams(window.location.search)
let subtitle = params.get("subtitlelink"),
    main_sub = document.querySelector("#main_sub")
    if(params.get("videolink")) {

        document.querySelector("#main_vid").src = params.get("videolink");
    } 
if (subtitle) {
    fetch(subtitle).then(async p => {
        const resp = await p.text()

        document.querySelector("#main_sub").src = URL.createObjectURL(new Blob([conv(resp)], { type: 'text/vtt' }));
    })
} else {
    main_sub.remove()
}


const player = new Plyr('#player');


document.addEventListener('DOMContentLoaded', () => {
    window.player = player;

    // Bind event listener
    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
    }

    // Play
    on('.js-play', 'click', () => {
        player.play();
    });

    // Pause
    on('.js-pause', 'click', () => {
        player.pause();
    });

    // Stop
    on('.js-stop', 'click', () => {
        player.stop();
    });

    // Rewind
    on('.js-rewind', 'click', () => {
        player.rewind();
    });

    // Forward
    on('.js-forward', 'click', () => {
        player.forward();
    });
});

player.on('playing', (event) => {
    const storedTime = localStorage.getItem('plyr-saved-time');
    if (storedTime && storedTime > 1 && storedTime != player.currentTime) {
        player.currentTime = Number(storedTime);
    }
})

player.on('ended', () => {
    localStorage.removeItem('plyr-saved-time');
});

player.on('timeupdate', (event) => {
    if (player.currentTime != 0) {
        localStorage.setItem('plyr-saved-time', player.currentTime);
    }
})