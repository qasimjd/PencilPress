import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { ButtonHTMLAttributes } from "react"

interface LoadingSwapButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  children: React.ReactNode
  loadingText?: string
  className?: string
}

const LoadingSwapButton = ({isLoading, children, loadingText, className, ...props}: LoadingSwapButtonProps) => {
  return (
    <div>
      <Button className={className} {...props} disabled={isLoading}>
        {isLoading ? (
          <>
           <Spinner className="mr-2" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </Button>
    </div>
  )
}

export default LoadingSwapButton
