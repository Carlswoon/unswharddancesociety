// aboutus.jsx

import { useEffect, useRef } from "react";

export default function AboutUs() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const toggleAudioRef = useRef(null);

  useEffect(() => {
    let isPlaying = false;
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const audio = audioRef.current;

    let animationId;

    // =========================
    // RESPONSIVE CANVAS
    // =========================

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      const rect =
        canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    resizeCanvas();

    // =========================
    // AUDIO
    // =========================

    const audioContext = new (
      window.AudioContext ||
      window.webkitAudioContext
    )();

    const analyser =
      audioContext.createAnalyser();

    analyser.fftSize = 256;

    const source =
      audioContext.createMediaElementSource(
        audio
      );

    source.connect(analyser);
    analyser.connect(
      audioContext.destination
    );

    const dataArray = new Uint8Array(
      analyser.frequencyBinCount
    );

    // =========================
    // LOGO
    // =========================

    const logo = new Image();

    logo.src = "/wing-logo.png";

    // =========================
    // AUDIO TOGGLE
    // =========================

    const loopStart = 48;
    const loopEnd = 80;

    const handleLoop = () => {
      if (audio.currentTime >= loopEnd) {
        audio.currentTime = loopStart;
      }
    };

    const toggleAudio = async () => {
      if (
        audioContext.state ===
        "suspended"
      ) {
        await audioContext.resume();
      }

      if (!isPlaying) {
        audio.volume = 0.45;

        if (
          audio.currentTime <
          loopStart
        ) {
          audio.currentTime =
            loopStart;
        }

        await audio.play();

        isPlaying = true;
      } else {
        audio.pause();

        isPlaying = false;
      }
    };

    toggleAudioRef.current = toggleAudio;
    
    audio.addEventListener(
      "timeupdate",
      handleLoop
    );


    // =========================
    // DRAW
    // =========================

    const draw = () => {
      animationId =
        requestAnimationFrame(draw);

      analyser.getByteFrequencyData(
        dataArray
      );

      const width =
        canvas.getBoundingClientRect()
          .width;

      const height =
        canvas.getBoundingClientRect()
          .height;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      // =========================
      // RESPONSIVE SCALE
      // =========================

      const scale =
        Math.min(width, height) / 680;

      // =========================
      // BASS
      // =========================

      const bassFreqs = [
        dataArray[1],
        dataArray[2],
        dataArray[3],
        dataArray[4],
      ];

      const bassAvg =
        bassFreqs.reduce(
          (a, b) => a + b,
          0
        ) / bassFreqs.length;

      let bass = bassAvg / 255;

      if (bass < 0.17) {
        bass = 0;
      }

      bass = Math.pow(bass, 2.3);

      // =========================
      // CENTER
      // =========================

      const centerX = width / 2;
      const centerY = height / 2;

      // =========================
      // GLOW
      // =========================

      const glowRadius =
        280 * scale;

      const glow =
        ctx.createRadialGradient(
          centerX,
          centerY,
          40 * scale,
          centerX,
          centerY,
          glowRadius
        );

      glow.addColorStop(
        0,
        `rgba(168,85,247,${
          0.18 + bass * 0.55
        })`
      );

      glow.addColorStop(
        0.4,
        "rgba(168,85,247,0.08)"
      );

      glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        glowRadius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      // =========================
      // STATIC RINGS
      // =========================

      const ring1 =
        165 * scale;

      const ring2 =
        188 * scale;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        ring1,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(168,85,247,0.22)";

      ctx.lineWidth =
        1.5 * scale;

      ctx.shadowBlur =
        12 * scale;

      ctx.shadowColor = "#9333ea";

      ctx.stroke();

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        ring2,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(168,85,247,0.08)";

      ctx.lineWidth = 1 * scale;

      ctx.stroke();

      // =========================
      // REACTIVE SQUIGGLE
      // =========================

      ctx.save();

      ctx.translate(
        centerX,
        centerY
      );

      ctx.rotate(
        Date.now() * 0.00006
      );

      ctx.beginPath();

      for (let i = 0; i <= 360; i++) {
        const angle =
          (i * Math.PI) / 180;

        const wave =
          Math.sin(
            i * 0.25 +
              Date.now() * 0.002
          ) *
          bass *
          35 *
          scale;

        const wave2 =
          Math.sin(
            i * 0.6 +
              Date.now() * 0.001
          ) *
          bass *
          15 *
          scale;

        const distortion =
          wave + wave2;

        const radius =
          ring1 + distortion;

        const x =
          Math.cos(angle) * radius;

        const y =
          Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();

      ctx.strokeStyle =
        "rgba(192,132,252,0.9)";

      ctx.lineWidth =
        2.5 * scale;

      ctx.shadowBlur =
        (22 + bass * 25) *
        scale;

      ctx.shadowColor = "#c084fc";

      ctx.stroke();

      ctx.restore();

      // =========================
      // LOGO
      // =========================

      if (logo.complete) {
        ctx.save();

        ctx.globalAlpha = 0.97;

        ctx.shadowBlur =
          (35 + bass * 55) *
          scale;

        ctx.shadowColor = "#f5d0fe";
        
        const logoScale = 1.25;

        const desiredWidth =
          (360 * logoScale + bass * 18) *
          scale;

        const aspectRatio =
          logo.width / logo.height;

        const desiredHeight =
          desiredWidth /
          aspectRatio;

        ctx.drawImage(
          logo,
          centerX -
            desiredWidth / 2,
          centerY -
            desiredHeight / 2 -
            18 * scale,
          desiredWidth,
          desiredHeight
        );

        ctx.restore();
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(
        animationId
      );

      source.disconnect();
      analyser.disconnect();

      audio.pause();

      isPlaying = false;

      audioContext.close();

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#05010b] text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_65%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* AUDIO */}

      <audio ref={audioRef}>
        <source
          src="/Home.mp3"
          type="audio/mp3"
        />
      </audio>

      {/* MAIN */}

      <section className="relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 lg:py-24">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr_1fr] items-center gap-10 xl:gap-2">

          {/* LEFT */}

          <div className="max-w-[520px] mx-auto xl:mx-0 text-center xl:text-left">

            <p className="
              text-[#d946ef]
              uppercase
              tracking-[0.35em]
              text-[0.68rem]
              sm:text-xs
              md:text-sm
              mb-5
              font-medium
            ">

              ABOUT US

            </p>

            <h1 className="
              font-black
              leading-[0.9]
              tracking-[-0.05em]
              mb-8

              text-[3rem]
              sm:text-[4rem]
              md:text-[5rem]
              lg:text-[5.8rem]
            ">

              MORE THAN

              <br />

              <span className="
                bg-gradient-to-r
                from-[#f0abfc]
                via-[#d946ef]
                to-[#9333ea]
                bg-clip-text
                text-transparent
              ">

                JUST MUSIC.

              </span>

            </h1>

            <p className="
              text-[#a1a1aa]
              leading-[1.9]

              text-[1rem]
              sm:text-[1.1rem]
              md:text-[1.2rem]
              lg:text-[1.32rem]

              mb-10
            ">

              We are a community of students
              who live for the harder styles.
              From Hardstyle to Raw,
              Hardcore to Uptempo — we
              create events that bring
              energy, unity and unforgettable
              memories.

            </p>

            <button className="
              group
              relative
              overflow-hidden
              border
              border-[#9333ea]
              hover:border-[#c084fc]
              transition-all

              px-8 py-4
              sm:px-10 sm:py-5

              rounded-[1.3rem]

              inline-flex
              items-center
              gap-5
            ">

              <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="
                relative z-10
                font-semibold
                tracking-wide

                text-base
                sm:text-lg
              ">

                LEARN MORE

              </span>

              <span className="relative z-10 text-2xl group-hover:translate-x-1 transition-transform">

                →

              </span>

            </button>
          </div>

          {/* CENTER */}

          <div className="flex justify-center items-center order-first xl:order-none">

            <div className="
              relative
              overflow-visible

              w-[340px]
              h-[340px]

              sm:w-[450px]
              sm:h-[450px]

              md:w-[560px]
              md:h-[560px]

              lg:w-[680px]
              lg:h-[680px]
            ">

              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-pointer"
                 onClick={() =>
                    toggleAudioRef.current?.()
                  }
              />

            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center xl:justify-end">

            <div className="
              relative
              overflow-hidden

              w-full
              max-w-[430px]

              border
              border-[#7e22ce]/50

              rounded-[2rem]

              bg-[linear-gradient(180deg,rgba(91,33,182,0.16),rgba(20,10,35,0.78))]

              backdrop-blur-xl

              p-8
              sm:p-10
              lg:p-12
            ">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.14),transparent_70%)]" />

              <div className="relative z-10">

                <h2 className="
                  font-black
                  leading-[0.95]
                  tracking-[-0.03em]

                  mb-7

                  text-[2.4rem]
                  sm:text-[3rem]
                  lg:text-[3.4rem]
                ">

                  JOIN THE
                  <br />
                  MOVEMENT

                </h2>

                <p className="
                  text-[#a1a1aa]
                  leading-[1.9]

                  text-[1rem]
                  sm:text-[1.1rem]
                  lg:text-[1.25rem]

                  mb-10
                ">

                  Be part of the Hard Dance
                  Society. Early access to
                  events, exclusive perks and
                  more.

                </p>

                <button className="
                  group
                  relative
                  overflow-hidden

                  bg-gradient-to-b
                  from-[#d946ef]
                  to-[#9333ea]

                  hover:brightness-110

                  transition-all

                  px-8 py-4
                  sm:px-10 sm:py-5

                  rounded-[1.2rem]

                  inline-flex
                  items-center
                  gap-5

                  shadow-[0_0_50px_rgba(168,85,247,0.45)]
                ">

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span className="
                    relative z-10
                    font-semibold
                    tracking-wide

                    text-base
                    sm:text-lg
                  ">

                    JOIN NOW

                  </span>

                  <span className="relative z-10 text-2xl group-hover:translate-x-1 transition-transform">

                    →

                  </span>

                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}