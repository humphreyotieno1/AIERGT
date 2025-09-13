export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Tailwind CSS Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              AIERGT Primary
            </h2>
            <div className="bg-[#2D5016] text-white p-4 rounded">
              African Forest Green
            </div>
          </div>
          
          {/* Test Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              AIERGT Secondary
            </h2>
            <div className="bg-[#D4AF37] text-black p-4 rounded">
              African Gold
            </div>
          </div>
          
          {/* Test Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              AIERGT Accent
            </h2>
            <div className="bg-[#1E3A8A] text-white p-4 rounded">
              Deep Blue
            </div>
          </div>
        </div>
        
        {/* Button Tests */}
        <div className="mt-8 space-x-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Standard Button
          </button>
          <button className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white px-6 py-2 rounded">
            AIERGT Button
          </button>
          <button className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black px-6 py-2 rounded">
            AIERGT Secondary
          </button>
        </div>
        
        {/* Typography Test */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Heading 1 - Montserrat</h1>
          <h2 className="text-2xl font-semibold mb-4">Heading 2 - Montserrat</h2>
          <h3 className="text-xl font-medium mb-4">Heading 3 - Montserrat</h3>
          <p className="text-base mb-4">
            This is body text using Poppins font. It should be clean and readable.
          </p>
          <p className="text-sm text-gray-600">
            This is smaller text also using Poppins font.
          </p>
        </div>
      </div>
    </div>
  )
}
