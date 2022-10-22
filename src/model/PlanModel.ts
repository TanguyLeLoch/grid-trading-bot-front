import { Pair } from './Pair'

export interface PlanModel {
  _id: string
  __v?: number

  pair: Pair
  platform: string
  priceMin: number
  step: number
  startAmount: number
  amountPerStep: number
  stepLevels: number[]
  featureOverride: object
}
