"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react"

import { cn } from "@/lib/utils"

const calloutVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+*]:pl-7 [&>.emoji+*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>.emoji]:absolute [&>.emoji]:left-4 [&>.emoji]:top-4",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-800",
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-100",
        success:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950/50 dark:text-green-100",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-100",
        error: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-100",
        milestone:
          "border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950/50 dark:text-purple-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const iconMap = {
  default: () => <Info className="h-4 w-4" />,
  info: () => <Info className="h-4 w-4" />,
  success: () => <CheckCircle className="h-4 w-4" />,
  warning: () => <AlertTriangle className="h-4 w-4" />,
  error: () => <AlertCircle className="h-4 w-4" />,
  milestone: () => <span className="emoji text-base">🎉</span>,
}

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof calloutVariants> {
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant = "default", title, dismissible = false, onDismiss, children, ...props }, ref) => {
    const Icon = iconMap[variant || "default"]

    return (
      <div ref={ref} role="alert" className={cn(calloutVariants({ variant }), className)} {...props}>
        <Icon />
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        <div className="text-sm [&_p]:leading-relaxed">{children}</div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    )
  },
)
Callout.displayName = "Callout"

export { Callout, calloutVariants } 