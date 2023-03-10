'use client'; // Error components must be Client components
import { Button } from "vcc-ui"
import { resetInterface } from "./types";

export const ErrorComponent = ({reset} : resetInterface) => {
    return (
        <div className='errorDiv'>
            <h2 className="errorText">Something went wrong!</h2>
            <Button
                onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
                }
            >
                Try again
            </Button>
        </div>
    )
}