import './App.css'


function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <section className="max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600">
          Fastor App
        </h1>

        <p className="mt-3 text-gray-600">
          React + Vite + Tailwind CSS is ready!
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </main>
  )
}

export default App

