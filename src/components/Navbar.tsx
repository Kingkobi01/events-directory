"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Navbar = () => {
    const path = usePathname()
  return (
      <nav style={{
          display: "flex",
          alignItems: "baseline"
      }} >
          <h1>Event.</h1>
          <ul style={{
          display: "flex",
              alignItems: "center",
              gap: "4rem",
              listStyle: "none",
          marginInline: "auto"
      }}>
              <li>
                  <Link
                      href="/events"
                      style={{
                          textDecoration: "none",
                          paddingBottom: "0.5rem",
                          borderBottom: path.startsWith("/events")?"solid 2px black":"none"
                      }}
                  >Events</Link>
              </li>
              <li>
                  <Link
                      href="/about"
                      style={{
                          textDecoration: "none",
                          padding: "0.5rem",
                          borderBottom: path.startsWith("/about")?"solid 2px black":"none"
                      }}
                  >About</Link>
              </li>
          </ul>
    </nav>
  )
}

export default Navbar