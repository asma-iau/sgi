import TreesChart from "../components/TreesChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-900">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-green-800">
          Saudi Green Initiative 🌱
        </h1>
        <p className="mt-4 text-lg">
          Tracking the journey to <strong>10 billion trees</strong> as part of Vision 2030
        </p>
      </section>

      {/* KPI Card */}
      <div className="mt-10 flex justify-center">
        <div className="bg-white shadow-md rounded-2xl p-6 w-64">
          <h2 className="text-xl font-semibold text-green-700">Trees Planted</h2>
          <p className="text-3xl font-bold mt-2 text-green-900">95,000,000+</p>
          <p className="text-sm text-gray-500">towards 10B target</p>
        </div>
      </div>

      {/* Chart */}
      <TreesChart />
    </main>
  )
}
