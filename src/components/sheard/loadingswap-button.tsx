import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

interface LoadingSwapButtonProps {
  isLoading?: boolean
  children: React.ReactNode
  loadingText?: string
  className?: string
}

const LoadingSwapButton = ({isLoading, children, loadingText, className}: LoadingSwapButtonProps) => {
  return (
    <div>
      <Button className={className}>
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
