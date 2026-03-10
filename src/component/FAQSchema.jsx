// src/component/FAQSchema.jsx
const faqs = [
  {
    question: "How do I download a YouTube video for free?",
    answer:
      "Simply paste the YouTube video URL into the input box on YouTube Download Pro, click the Download button, choose your preferred quality (MP4, HD, 4K or MP3), and your download will start instantly. No registration or software needed.",
  },
  {
    question: "Can I download YouTube videos in 4K quality?",
    answer:
      "Yes! YouTube Download Pro supports downloading videos in multiple resolutions including 360p, 480p, 720p HD, 1080p Full HD, and 4K Ultra HD — depending on the original video quality.",
  },
  {
    question: "How do I convert a YouTube video to MP3?",
    answer:
      "Paste your YouTube URL into YouTube Download Pro and select the MP3 audio format option. The tool will extract the audio and let you download it as a high quality MP3 file instantly.",
  },
  {
    question: "Does YouTube Download Pro work on iPhone and Android?",
    answer:
      "Yes! YouTube Download Pro is fully mobile-friendly and works on all devices including iPhone, Android, tablets, and desktop computers — directly from your browser with no app required.",
  },
  {
    question: "Is YouTube Download Pro free to use?",
    answer:
      "Yes, YouTube Download Pro is 100% free with no hidden charges, no subscription, and no login required. Simply visit the site and start downloading immediately.",
  },
  {
    question: "Can I download a full YouTube playlist?",
    answer:
      "Yes, YouTube Download Pro supports playlist downloads. Simply paste the playlist URL and select the videos you want to download.",
  },
  {
    question: "Is it safe to use YouTube Download Pro?",
    answer:
      "Absolutely. YouTube Download Pro does not contain viruses, malware, or intrusive ads. Your downloads are processed securely and no personal data is stored.",
  },
  {
    question: "What video formats does YouTube Download Pro support?",
    answer:
      "YouTube Download Pro supports MP4, WebM, and MP3 formats. You can choose your preferred format and quality before downloading.",
  },
  {
    question: "Do I need to install any software to download YouTube videos?",
    answer:
      "No installation is required. YouTube Download Pro works entirely in your web browser on any device — just paste, click, and download.",
  },
  {
    question: "Why is my download taking too long?",
    answer:
      "Download speed depends on your internet connection and the video size. For large HD or 4K videos, it may take a few seconds to prepare. Try selecting a lower quality for faster downloads.",
  },
];

export default function FAQSchema() {
  return (
    <>
      {/* Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Visible FAQ Section on the page */}
      <section
        style={{
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "0 1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
            color: "#1a1a2e",
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "2rem",
            fontSize: "1rem",
          }}
        >
          Everything you need to know about YouTube Download Pro
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, index) => (
            <details
              key={index}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  color: "#1a1a2e",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {faq.question}
                <span style={{ color: "#3b82f6", fontSize: "1.2rem" }}>+</span>
              </summary>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: 0,
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}