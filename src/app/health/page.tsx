export default async function HealthCheckPage() {
  let data = null;
  let status = "Success";

  try {
    const res = await fetch("https://typicode.com", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch testing mock data");
    data = await res.json();
  } catch (error) {
    status = "Failed";
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h1 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
        System Health Check:{" "}
        <span className={status === "Success" ? "text-green-600" : "text-red-600"}>
          ● {status}
        </span>
      </h1>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-xs">
        <p className="mb-2 text-gray-500">// Live Fetched Payload Evidence:</p>
        {data ? <pre className="text-gray-800">{JSON.stringify(data, null, 2)}</pre> : <p className="text-red-500">Error loading verification data.</p>}
      </div>
    </div>
  );
}
