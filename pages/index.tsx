export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-center">
        Sustainability in Emergent Recursion Framework
      </h1>
      <p className="max-w-2xl text-center text-gray-300 mb-10">
        SERF is a living framework for understanding and modeling reality through contradiction,
        recursion, and convergence. This is not a static theory. This is emergence in motion.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/interactive"
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 text-center"
        >
          Explore Interactive Tools
        </a>
        <a
          href="/proof"
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 text-center"
        >
          Read the Framework
        </a>
        <a
          href="/news"
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 text-center"
        >
          View Recent Signals
        </a>
        <a href="/seed">🌀 Launch the Seed Generator</a>
      </div>
    </div>
  );
}
