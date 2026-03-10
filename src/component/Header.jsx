import { useRef, useEffect } from "react";
import Typed from "typed.js";
import "../App.css";

function HeaderFormat() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Download YouTube Videos",
        "Save Videos in HD or MP3",
        "Fast, Secure and Free"
      ],
      typeSpeed: 60,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header
      aria-label="YouTube Downloader Header"
      style={{
        textAlign: 'center',
        width: '100%',
        padding: '6rem 1rem 4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.2,
            textAlign: 'center',
            width: '100%',
            display: 'block',
          }}
        >
          YouTube{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #000 0%, #555 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Download Pro
          </span>
        </h1>

        <div
          style={{
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1.5rem 0',
          }}
        >
          <span
            ref={el}
            aria-hidden="true"
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 600,
              color: '#6a6a6a',
            }}
          ></span>
        </div>
      </div>
    </header>
  );
}

export default HeaderFormat;