'use client'

import React from 'react'

import { cn } from '@/lib/utils'

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  showRadialGradient?: boolean
}

export const AuroraBackground = (
  { className, showRadialGradient = true, ...props }: AuroraBackgroundProps
) => {
  return (
    <div
      className={cn(
        'absolute w-full h-full overflow-hidden -z-[1]',
        className,
        'select-none pointer-events-none'
      )}
      {...props}
    >
      <div className="relative h-full w-full transition-bg">
        <div className="absolute inset-0">
          <div
            className={cn(
              // Base gradient and blur effect
              '[background-image:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%),repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#c4b5fd_25%,#60a5fa_30%)]',
              'dark:[background-image:repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%),repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#c4b5fd_25%,#60a5fa_30%)]',
              '[background-size:300%,_200%]',
              '[background-position:50%_50%,50%_50%]',
              'filter blur-[10px]', //invert dark:invert-0

              // After element (pseudo-element) with the same gradient and animation
              'after:content-[""] after:absolute after:inset-0',
              'after:[background-image:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%),repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#c4b5fd_25%,#60a5fa_30%)]',
              'after:dark:[background-image:repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%),repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#c4b5fd_25%,#60a5fa_30%)]',
              'after:[background-size:200%,_100%]',
              'after:animate-aurora after:[background-attachment:fixed]',
              'after:mix-blend-difference',

              // Visual and position adjustments
              'pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform'
            )}
          />
        </div>
        {showRadialGradient && (
          <div
            className='relative w-full h-full'
            style={{
              background:
                'radial-gradient(circle at 100% 0%, transparent 30%, black 70%)',
            }}
          />
        )}
      </div>
    </div>
  )
}
