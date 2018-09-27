import isValid from './isValid'

export default function is(input, schema){
  if(arguments.length === 2) return isValid({input, schema})

  return schemaHolder => isValid(
    {input, schema: schemaHolder}
  )
}

