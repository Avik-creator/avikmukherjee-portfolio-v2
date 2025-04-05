import Link from "next/link"
import CalButton from "./CallButton"

interface SocialLink {
  name: string
  url: string
}

interface ContactProps {
  socialLinks: SocialLink[]
  email: string
}

export default function Contact({ socialLinks, email }: ContactProps) {
  return (
    <section>
      <h2 className="text-sm mb-4">reach</h2>
      <p className="leading-relaxed">
      connect on{" "}
      {socialLinks.map((link, index) => (
        <span key={link.name}>
        <Link href={link.url} className="underline">
          {link.name}
        </Link>
        {index < socialLinks.length - 1 ? ", " : ""}
        </span>
      ))}{" "}
      - or send me an email at{" "}
      <Link href={`mailto:${email}`} className="underline">
        {email}
      </Link>
      - or book a call with me using the button below.
      <br />
      <span className="flex justify-center mt-8 sm:mt-4 mb-4">
        <CalButton />
      </span>
      </p>
    </section>
  )
}

