import { useRef, useState, useEffect } from "react"
export function GeneralStatsCard({ link, baseLoadingMessage }) {
  const statsCardMessage = useRef("Loading LeetCode stats card...")
  const [periods, setPeriods] = useState(2) // zero-based with +1 offset later
  const [imageResolved, setImageResolved] = useState(false)
  const [error, setError] = useState("")
  const intervalId = useRef(-1)
  const imageResolvedRef = useRef(false);

  function cleanup() {
    if (intervalId.current !== -1) {
      clearInterval(intervalId.current)
      intervalId.current = -1
    }
  }

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setPeriods(p => {
        p = (p + 1) % 3
        statsCardMessage.current = `${baseLoadingMessage}${".".repeat(p + 1)}`
        return p
      })
    }, 250)

    const timeoutId = setTimeout(() => {
      if (!imageResolvedRef.current) {
        cleanup();
        setError(e => {
          statsCardMessage.current = "";
          return "Something went wrong loading the card. Try again later!";
        });
      }
    }, 10000);

    return () => {
      cleanup();
      clearTimeout(timeoutId);
    };
  }, [])

  return (
    <div>
      {(!imageResolved || error) && (
        <div
          className="general-site-font"
          style={{
            color: "#fff",
            fontStyle: "italic",
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {statsCardMessage.current || error}
        </div>
      )}
      {!error && (
        <div align="center" style={{ marginTop: "50px" }}>
          <img
            src={link}
            alt=""
            onLoad={() => {
              if(error) return;
              imageResolvedRef.current = true;
              cleanup();
              setImageResolved(true);
            }}
            onError={() => {
              imageResolvedRef.current = true;
              cleanup();
              statsCardMessage.current = "";
              setError("Something went wrong loading the card. Try again later!");
            }}
          />
      </div>
      )}
    </div>
  )
}
