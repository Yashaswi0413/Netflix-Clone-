import { useEffect, useState } from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'
import { BASE_URL } from '../config'

export default function HeroBanner() {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const API_KEY = process.env.API_KEY
  // fetching random movie
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
        )
        const data = await response.json()
        // get random movie from the list
        const randomMovie = data.results[
          Math.floor(Math.random() * data.results.length)
        ]
        setMovie(randomMovie)
      } catch (error) {
        console.error("Error fetching data: ", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="h-[56.25vw] bg-gray-900"></div>
  }

  // truncate description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <div className="relative h-[56.25vw] w-full">
      {/*bg image with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title || movie?.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-[20%] left-4 md:left-16 max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <p className="text-sm text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl">
          {truncate(movie?.overview, 150)}
        </p>
        
        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 md:h-5 md:w-5" /> Play
          </button>
          <button className="bannerButton bg-gray-600/70 text-white">
            <FaInfoCircle className="h-4 w-4 md:h-5 md:w-5" /> More Info
          </button>
        </div>
      </div>
    </div>
  )
}