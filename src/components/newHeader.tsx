import { Link } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export default function NewHeader() {
  const navlink: Array<{ id: number; name: string; href: string }> = [
    { id: 0, name: 'Home', href: '/' },
    { id: 1, name: 'Location', href: '/location' },
    { id: 2, name: 'Work', href: '/work' },
    { id: 3, name: 'About', href: '/about' },
    { id: 4, name: 'Contact', href: '/contact' },
  ]

  return (
    <div>
      <header className="flex justify-between items-center px-4 py-2 lg:px-12 bg-linear-to-r from-gray-800 via-gray-700 to-gray-600">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-16" src="/logo192.png" alt="logo 192" />
          </Link>
        </div>
        <NavigationMenu className="hidden lg:flex gap-6 items-center">
          <NavigationMenuList className="flex gap-6">
            {navlink.map((items) => (
              <NavigationMenuItem key={items.id} asChild>
                <Link
                  className="text-gray-200 hover:text-gray-300 font-medium"
                  to={items.href}
                >
                  {items.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuGroup>
                {navlink.map((items) => (
                  <DropdownMenuItem key={items.id}>
                    <Link to={items.href}>{items.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <aside></aside>
    </div>
  )
}
