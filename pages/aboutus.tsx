
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <div className="bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800">
      <header className="container py-4 md:py-6">
        <div className="flex items-center space-x-4">
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="font-semibold text-base tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
              href="#"
            >
              Home
            </Link>
            <Link
              className="font-semibold text-base tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
              href="#"
            >
              Services
            </Link>
            <Link
              className="font-semibold text-base tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
              href="#"
            >
              About
            </Link>
            <Link
              className="font-semibold text-base tracking-wide border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-300"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex-1 min-w-0">
            <Link className="flex items-center space-x-2 font-bold" href="#">
              <span className="sr-only">Home</span>
              <FlagIcon className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">Company Name</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link className="text-base font-medium" href="#">
              Sign in
            </Link>
            <Link
              className="inline-block text-sm font-medium border border-gray-200 rounded-md border-gray-200 bg-white px-3 py-2 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full py-6 md:py-12">
        <div className="container grid gap-6 px-4 text-center md:grid-cols-2 md:gap-10 md:px-6 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-2">
            <img
              alt="Cover image"
              className="aspect-video overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are a team of passionate individuals dedicated to innovation and excellence. Our mission is to
                provide high-quality solutions that empower our clients and make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Avatar"
                className="rounded-full object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-sm text-gray-500">CEO</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Avatar"
                className="rounded-full object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-sm text-gray-500">CTO</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Avatar"
                className="rounded-full object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Alice Johnson</h3>
                <p className="text-sm text-gray-500">CFO</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Avatar"
                className="rounded-full object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Mike Brown</h3>
                <p className="text-sm text-gray-500">COO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container py-12 md:py-16">
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 lg:gap-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Ready to get started? Contact us and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Subject" />
                <Textarea className="min-h-[150px]" placeholder="Your Message" />
                <Button size="lg">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-12 md:py-24">
        <div className="container grid gap-10 px-4 text-center md:grid-cols-3 md:gap-16 md:px-6 lg:gap-20">
          <div className="space-y-4">
            <Link className="inline-flex items-center space-2 font-bold" href="#">
              <FlagIcon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <p className="text-sm text-gray-500/70 leading-none dark:text-gray-400/70">
              Innovative solutions for your business
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="font-semibold">Features</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#">Analytics</Link>
              </li>
              <li>
                <Link href="#">Automation</Link>
              </li>
              <li>
                <Link href="#">Collaboration</Link>
              </li>
              <li>
                <Link href="#">Integration</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-semibold">Contact Us</h5>
            <p className="text-sm text-gray-500/70 dark:text-gray-400/70">
              Have any questions or comments? Let us know.
            </p>
            <form className="flex flex-col gap-2 min-[300px]:flex-row">
              <Input placeholder="Enter your email" type="email" />
              <Button className="min-w-[120px]" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="container flex items-center justify-between pt-10 pb-4 text-sm border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500/70 dark:text-gray-400/70">© 2023 Company Name. All rights reserved.</p>
          <nav className="flex items-center space-x-4">
            <Link className="text-gray-500/70 hover:underline dark:text-gray-400/70" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-500/70 hover:underline dark:text-gray-400/70" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
