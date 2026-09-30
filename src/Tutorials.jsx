import { useEffect, useRef, useState } from "react";
import { useT } from "./i18n.jsx";

export const TUTORIALS = [
  {
    id: "aeps",
    title: "AEPS",
    description:
      "See how a customer can withdraw cash through AEPS with Manthan Pay.",
    video: `${import.meta.env.BASE_URL}videos/aeps.mp4`,
    available: true,
  },

  {
    id: "bbps",
    title: "BBPS",
    description: "See how bill payments work through Manthan Pay.",
    video: null,
    available: false,
  },

  {
    id: "micro-atm",
    title: "Micro ATM",
    description: "See how assisted banking works through Micro ATM.",
    video: null,
    available: false,
  },
];

export function ServiceTutorials() {
  const { t } = useT();

  const sectionRef = useRef(null);
  const previewVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const current = TUTORIALS[0];

  /*
   * AUTO PLAY WHEN TUTORIAL SECTION ENTERS VIEW
   */
  useEffect(() => {
    const section = sectionRef.current;
    const video = previewVideoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Required for browser autoplay
          video.muted = true;

          video.play().catch(() => {
            // Browser may still block autoplay
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * OPEN BIG VIDEO POPUP
   */
  const openTutorial = () => {
    setIsOpen(true);
  };

  /*
   * CLOSE BIG VIDEO POPUP
   */
  const closeTutorial = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }

    setIsOpen(false);
  };

  /*
   * ESCAPE KEY
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeTutorial();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /*
   * START MODAL VIDEO
   */
  useEffect(() => {
    if (!isOpen || !modalVideoRef.current) return;

    const video = modalVideoRef.current;

    video.currentTime = 0;

    // Since user clicked the Watch button,
    // browser usually allows playback.
    video.muted = false;

    video.play().catch(() => {});
  }, [isOpen]);

  return (
    <>
      {/* ================================
          ANIMATED TUTORIAL SECTION
      ================================= */}

      <section id="tutorials" ref={sectionRef} className="tutorial-section">
        <div className="wrap">
          <div className="tutorial-shell">
            {/* LEFT SIDE */}
            <div className="tutorial-copy rv">
              <span className="tutorial-kicker">
                <span className="tutorial-kicker-arrow">▶</span>

                {t("ANIMATED TUTORIALS")}
              </span>

              <h2>{t("Understand the service before you serve")}</h2>

              <p>
                {t(
                  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.",
                )}
              </p>

              <button
                type="button"
                className="btn primary tutorial-watch"
                onClick={openTutorial}
              >
                {t("Watch AEPS tutorial")} →
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="tutorial-preview rv">
              <div className="tutorial-video-card">
                {/* VIDEO HEADER */}
                <div className="tutorial-video-header">
                  <strong>{t("AEPS")}</strong>

                  <span>{t("MANTHAN PAY")}</span>
                </div>

                {/* AUTO PLAY VIDEO */}
                <video
                  ref={previewVideoRef}
                  className="tutorial-video"
                  src={current.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                />

                {/* VIDEO FOOTER */}
                <div className="tutorial-video-footer">
                  <span>
                    <i></i>
                    {t("AEPS Tutorial")}
                  </span>

                  <span>{t("Manthan Pay")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          BIG VIDEO POPUP
      ================================= */}

      {isOpen && (
        <div
          className="tutorial-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeTutorial();
            }
          }}
        >
          <div className="tutorial-modal-box">
            <div className="tutorial-modal-header">
              <div>
                <strong>{t("AEPS Tutorial")}</strong>

                <span>{t("Manthan Pay")}</span>
              </div>

              <button
                type="button"
                className="tutorial-modal-close"
                onClick={closeTutorial}
                aria-label={t("Close")}
              >
                ×
              </button>
            </div>

            <div className="tutorial-modal-video-wrap">
              <video
                ref={modalVideoRef}
                className="tutorial-modal-video"
                src={current.video}
                controls
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
