import { useCallback, useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedVal, setStoredVal] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedVal) : value
        setStoredVal(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.warn(`useLocalStorage: failed to set key "${key}"`, error)
      }
    },
    [key, storedVal]
  )

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key)
      setStoredVal(initialValue)
    } catch (error) {
      // silent
    }
  }

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredVal(JSON.stringify(e.newValue) as T)
        } catch (error) {
          // ignore malformed values
        }
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [key])

  return { storedVal, setValue, removeValue } as const
}
