'use client'

import { useState } from 'react'

const ImageTest = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Image Test</h3>
      
      {/* Test Logo */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Logo Test:</p>
        <img
          src="/images/logo.svg"
          alt="Logo Test"
          width={50}
          height={50}
          className="border"
          onError={() => setImageError(true)}
        />
        {imageError && <p className="text-red-500 text-sm">Logo failed to load</p>}
      </div>

      {/* Test Hero Image */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Hero Image Test:</p>
        <img
          src="/images/hero.jpg"
          alt="Hero Test"
          width={200}
          height={150}
          className="border rounded"
          onError={(e) => {
            console.error('Hero image failed to load:', e)
          }}
        />
      </div>

      {/* Test Direct URL */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Direct URL Test:</p>
        <img
          src="https://via.placeholder.com/200x150/4ade80/ffffff?text=Test"
          alt="Placeholder Test"
          width={200}
          height={150}
          className="border rounded"
          onError={(e) => {
            console.error('Placeholder image failed to load:', e)
          }}
        />
      </div>
    </div>
  )
}

export default ImageTest
