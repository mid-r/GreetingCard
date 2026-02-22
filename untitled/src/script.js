 function openCard() {
      const envelope = document.querySelector('.envelope');
      envelope.classList.add('open');
      
      // Play music with fade-in
      const music = document.getElementById("birthdayMusic");
      music.volume = 0; // start silent
      music.play();

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.5) { // target volume
          vol += 0.05;
          music.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 300);

      setTimeout(() => {
        envelope.style.display = 'none';
        const msg = document.getElementById("message");
        msg.classList.add("show");
        releaseConfetti();
      }, 1600);
    }

    function releaseConfetti() {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
      }
    }

    function randomColor() {
      const colors = ['#f8c8dc', '#d8f3dc', '#e6ccf3']; // pastel pink, green, lilac
      return colors[Math.floor(Math.random() * colors.length)];
    }