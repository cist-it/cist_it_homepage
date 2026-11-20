import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img
              src="/logo.svg"
              alt="CIST Logo"
              className="h-10 w-auto rounded-md bg-white p-1 object-contain"
            />
            <span className="text-lg font-bold tracking-tight">CIST IT COMMUNITY</span>
          </a>

          <NavigationMenu>
            <NavigationMenuList className="flex-col gap-2 sm:flex-row sm:gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/members"
                  className={`${navigationMenuTriggerStyle()} bg-transparent text-zinc-300 underline underline-offset-4 hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white`}
                >
                  活動内容
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/clubs"
                  className={`${navigationMenuTriggerStyle()} bg-transparent text-zinc-300 underline underline-offset-4 hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white`}
                >
                  メンバー
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects"
                  className={`${navigationMenuTriggerStyle()} bg-transparent text-zinc-300 underline underline-offset-4 hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white`}
                >
                  プロジェクト
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
          © 2026 CIST IT COMMUNITY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer