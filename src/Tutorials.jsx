import { useEffect, useRef } from "react";
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
  const videoRef = useRef(null);

  const current = TUTORIALS[0];

  /*
   * Automatically start the video when the
   * Tutorials section enters the viewport.
   */
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /*
           * Browsers allow autoplay when muted.
           */
          video.muted = true;

          video.play().catch(() => {
            // Browser may still block autoplay.
          });
        } else {
          /*
           * Pause when user scrolls away from
           * the Tutorials section.
           */
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

  const watchTutorial = () => {
    if (!videoRef.current) return;

    videoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    videoRef.current.muted = false;

    videoRef.current.play().catch(() => {});
  };

  return (
    <section ref={sectionRef} id="tutorials" className="tutorial-section">
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
              onClick={watchTutorial}
            >
              {t("Watch AEPS tutorial")} →
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="tutorial-preview rv">
            <div className="tutorial-video-card">
              <div className="tutorial-video-header">
                <strong>AEPS</strong>

                <span>MANTHAN PAY</span>
              </div>

              <video
                ref={videoRef}
                id="manthan-tutorial-video"
                className="tutorial-video"
                src={current.video}
                controls
                preload="metadata"
                playsInline
                muted
              />

              <div className="tutorial-video-footer">
                <span>
                  <i></i>
                  AEPS Tutorial
                </span>

                <span>Manthan Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
