const box = (w, h, radius = "6px") => ({
  width: w, height: h, borderRadius: radius,
  background: "#e0e0e0",
  animation: "pulse 1.4s ease-in-out infinite",
});

export default function SkeletonLoader() {
  return (
    <>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      <div style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "24px" }}>
        <div style={box("80px", "80px", "50%")} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={box("180px", "18px")} />
          <div style={box("120px", "14px")} />
          <div style={box("220px", "14px")} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px" }}>
        {[...Array(4)].map((_, i) => <div key={i} style={box("100%", "80px")} />)}
      </div>
    </>
  );
}