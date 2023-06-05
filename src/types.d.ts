export interface tableProps {
  food_name: string
  food_type: string
  properties: {
    serving_description: string
    calories: string
    fat: string
    carbohydrate: string
    protein: string
  }
  macro_category: string
  sub_category: string[]
}
