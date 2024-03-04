const audio = document.getElementById('audio');
        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');
        const stopButton = document.getElementById('stop');
        const timelineProgress = document.getElementById('timeline-progress');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeTooltip = document.getElementById('volumeTooltip');

        playButton.addEventListener('click', () => {
            audio.play();
        });

        pauseButton.addEventListener('click', () => {
            audio.pause();
        });

        stopButton.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
        });

        // volumeSlider.addEventListener('input', function() {
        //     audio.volume = volumeSlider.value;
        // });

        volumeSlider.addEventListener('input', function() {
            audio.volume = volumeSlider.value;
            volumeTooltip.textContent = 'Volume: ' + Math.round(volumeSlider.value * 100) + '%';
        });

        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            timelineProgress.style.width = `${progress}%`;
        });
