export interface MovieItemData {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieResponse {
  Search?: MovieItemData[]
  totalResults?: string
  Error?: string
  Response: string
}
