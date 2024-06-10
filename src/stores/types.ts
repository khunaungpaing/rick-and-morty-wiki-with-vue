export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

// PaginationInfo type
export interface PaginationInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

// API Response type
export interface ApiResponse {
  info: PaginationInfo
  results: Character[]
}
