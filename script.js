document.addEventListener("DOMContentLoaded", () => {
    
    // Elements Selector Mapping
    const openBtn = document.getElementById("openBtn");
    const curtainCover = document.getElementById("curtainCover");
    const mainContent = document.getElementById("mainContent");
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const petalsHolder = document.getElementById("petalsHolder");

    // ================= 1. OPEN INVITATION SCISSOR SPLIT TRANSITION =================
    openBtn.addEventListener("click", () => {
        // Trigger Curtain Animation Layer via Class Injection
        curtainCover.classList.add("open");
        
        // Expose hidden dashboard engine layout smoothly
        mainContent.classList.remove("hidden");
        setTimeout(() => {
            mainContent.classList.add("visible");
        }, 100);

        // Terminate DOM overhead footprints after movement transitions finalize
        setTimeout(() => {
            curtainCover.classList.add("gone");
        }, 1300);

        // Intentional Audio Playback Initialization on user explicit gesture event 
        playAudio();
        // Fire procedural petal generator pipeline loop
        startPetalsGenerator();
        // Draw maps instance render geometry calculations safely after container size settles
        setTimeout(initializeEventMap, 400);
    });

    // ================= 2. BACKGROUND SOUND MANAGEMENT MODULE =================
    function playAudio() {
        bgMusic.play().then(() => {
            musicToggle.classList.add("playing");
        }).catch(err => console.log("Audio auto-playback blocked or deferred: ", err));
    }

    musicToggle.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.classList.add("playing");
        } else {
            bgMusic.pause();
            musicToggle.classList.remove("playing");
        }
    });

    // ================= 3. TIME RECKONING ENGINE (COUNTDOWN) =================
    const weddingTimelineDate = new Date("July 5, 2026 09:00:00").getTime();

    const runCountdownEngine = () => {
        const structuralNow = new Date().getTime();
        const calculationDelta = weddingTimelineDate - structuralNow;

        if (calculationDelta < 0) {
            document.querySelector(".countdown-container").innerHTML = "<p style='font-family:Cinzel;color:var(--gold)'>The Wedding Celebration Has Begun!</p>";
            return;
        }

        const computedDays = Math.floor(calculationDelta / (1000 * 60 * 60 * 24));
        const computedHours = Math.floor((calculationDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const computedMinutes = Math.floor((calculationDelta % (1000 * 60 * 60)) / (1000 * 60));
        const computedSeconds = Math.floor((calculationDelta % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(computedDays).padStart(2, '0');
        document.getElementById("hours").innerText = String(computedHours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(computedMinutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(computedSeconds).padStart(2, '0');
    };
    setInterval(runCountdownEngine, 1000);

    // ================= 4. IMAGE SLIDER LOGIC COMPONENTS =================
    const images = document.querySelectorAll("#imageSlider img");
    const nextBtn = document.getElementById("nextSlide");
    const prevBtn = document.getElementById("prevSlide");
    let currentSlideIndex = 0;

    const changeSlide = (targetIndex) => {
        images[currentSlideIndex].classList.remove("active");
        currentSlideIndex = (targetIndex + images.length) % images.length;
        images[currentSlideIndex].classList.add("active");
    };

    nextBtn.addEventListener("click", () => changeSlide(currentSlideIndex + 1));
    prevBtn.addEventListener("click", () => changeSlide(currentSlideIndex - 1));
    
    // Automated cyclic rotation intervals
    setInterval(() => changeSlide(currentSlideIndex + 1), 5000);

    // ================= 5. INTERACTIVE MAP ENGINE INJECTION =================
    function initializeEventMap() {
        // GPS Coordinates center pinpointing Chennai wedding areas
        const coordinatesVector = [13.0827, 80.2707]; 
        
        const mapInstance = L.map('map', {
            scrollWheelZoom: false
        }).setView(coordinatesVector, 13);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapInstance);

        L.marker(coordinatesVector).addTo(mapInstance)
            .bindPopup('<b>Wedding Venue Portfolio</b><br>Grand Marriage Palace.')
            .openPopup();
    }

    // ================= 6. AMBIENT PARTICLES ENGINE (FLOATING PETALS) =================
    function startPetalsGenerator() {
        const lifecycleLimit = 25; 
        for (let i = 0; i < lifecycleLimit; i++) {
            spawnIndividualPetal();
        }
    }

    function spawnIndividualPetal() {
        const petalNode = document.createElement("div");
        petalNode.classList.add("petal");
        
        const sizeVariance = Math.random() * 12 + 8; // Random dimension ranges between 8px and 20px
        const horizontalCoordinateOffset = Math.random() * 100;
        const animationDelayWindow = Math.random() * 8;
        const speedDurationWindow = Math.random() * 6 + 6;

        petalNode.style.width = `${sizeVariance}px`;
        petalNode.style.height = `${sizeVariance}px`;
        petalNode.style.left = `${horizontalCoordinateOffset}%`;
        petalNode.style.animationDelay = `${animationDelayWindow}s`;
        petalNode.style.animationDuration = `${speedDurationWindow}s`;

        petalsHolder.appendChild(petalNode);

        // Recycle element node instances on transition expiration to avoid layout performance degradation
        petalNode.addEventListener("animationend", () => {
            petalNode.remove();
            spawnIndividualPetal();
        });
    }
});
