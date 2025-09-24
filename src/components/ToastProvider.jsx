import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const ToastContext = createContext({ showToast: () => {} })

export const useToast = () => useContext(ToastContext)

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback((message, variant = 'success', durationMs = 5000) => {
    idRef.current += 1
    const id = idRef.current
    setToasts((prev) => [...prev, { id, message, variant }])
    window.setTimeout(() => remove(id), durationMs)
  }, [remove])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div aria-live="polite" aria-atomic="true" className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-md flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={
              [
                'pointer-events-auto rounded-lg px-4 py-3 shadow-lg ring-1 ring-inset transition',
                t.variant === 'success' ? 'bg-emerald-600/90 text-white ring-emerald-400/40' : 'bg-rose-600/90 text-white ring-rose-400/40',
              ].join(' ')
            }
          >
            <div className="flex items-start gap-3">
              <span className="sr-only">Notification</span>
              <div className="mt-0.5 text-sm">{t.message}</div>
              <button
                type="button"
                aria-label="Close notification"
                className="ml-auto inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => remove(t.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}


