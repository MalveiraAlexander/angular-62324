export interface AbilityResponse {
  count: number
  results: Result[]
}

interface Result {
  name: string
  url: string
}
