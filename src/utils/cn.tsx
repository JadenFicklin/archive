import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

type ClsxArgument =
  | string
  | undefined
  | null
  | boolean
  | Record<string, boolean>

export const cn = (...classes: ClsxArgument[]) => {
  return twMerge(clsx(...classes))
}
