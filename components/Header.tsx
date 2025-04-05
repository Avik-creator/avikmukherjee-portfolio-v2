interface HeaderProps {
    name: string
    location: string
  }
  
  export default function Header({ name, location }: HeaderProps) {
    return (
      <header className="mb-12">
        <h1 className="text-xl font-medium mb-1">{name}</h1>
        <p className="text-white/70">{location}</p>
      </header>
    )
  }
  
  