export default async function HealthCheckPage() {
  let data = null;
  let status = "Success";

  try {
    const res = await fetch("https://typicode.com", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed");
    data = await res.json();
  } catch (error) {
    status = "Failed";
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", color: "#fff", background: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: status === "Success" ? "#4ade80" : "#f87171" }}>
        System Health Status: {status}
      </h1>
      <pre style={{ background: "#111", padding: "20px", border: "1px solid #333", borderRadius: "8px" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}