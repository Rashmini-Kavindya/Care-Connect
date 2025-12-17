function App() {
  return (
    // මේ div එකේ bg-blue-100 තියෙන නිසා මුළු background එකම ලා නිල් පාට වෙයි.
    <div className="flex h-screen items-center justify-center bg-blue-100">
      {/* අපි මෙතන bg-blue වෙනුවට bg-white දැම්මා. දැන් මැද පෙට්ටිය සුදු පාටින් පේයි. */}
      <div className="text-center p-10 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Care Connect 🏥
        </h1>
        <p className="text-gray-600 text-lg">
          Tailwind CSS දැන් ලස්සනට වැඩ! 🚀
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App