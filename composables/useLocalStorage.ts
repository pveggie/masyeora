type SetValueFunction = (newValue: string) => void

export const useLocalStorage = (key: string): [string, SetValueFunction] => {
  const value = process.server ? '' : localStorage.getItem(key) || ''

  const setValue = (newValue = '') => {
    if (process.client) {
      localStorage.setItem(key, newValue)
    }
  }

  return [value, setValue]
}
