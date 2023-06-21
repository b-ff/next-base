const mapDateFieldsToString = <T extends Object>(obj: T) => {
  return Object.entries(obj).reduce((acc, [key, value]: [string, unknown]): Record<string, unknown> => {
    let safeValue;

    if (value instanceof Date) {
      safeValue = value.toISOString()
    } else if (value && typeof value === 'object') {
      safeValue = mapDateFieldsToString(value as Record<any, unknown>)
    } else {
      safeValue = value
    }

    return {
      ...acc,
      [key]: safeValue
    }
  }, {})
}

export const asyncMapDatesToString = async <T, R>(callee: Promise<T>) => {
  const result = await callee;

  if (!result) {
    return result
  } else if (Array.isArray(result)) {
    return result.map((item) => mapDateFieldsToString(item))
  }

  return mapDateFieldsToString(result)
}