import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="flex items-center h-16 px-4 w-full md:px-6">
      <Link className="mr-4" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden space-x-4 md:flex flex-1 text-sm font-medium">
        <Link className="text-gray-900 dark:text-gray-50" href="/login">
          About
        </Link>
        <Link className="text-gray-500 dark:text-gray-500" href="#">
          Features
        </Link>
        <Link className="text-gray-500 dark:text-gray-500" href="#">
          Pricing
        </Link>
        <Link className="text-gray-500 dark:text-gray-500" href="#">
          Resources
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
      <Link className="text-gray-500 dark:text-gray-500" href="/signup">
        <Button size="sm" >Sign Up</Button>
        </Link>
        <Link className="text-gray-500 dark:text-gray-500" href="/login">
        <Button size="sm" variant="outline" >
          Sign in
        </Button>
        </Link>
      </div>
    </header>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
