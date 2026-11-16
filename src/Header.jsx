"use client"

import * as React from "react"
import "./index.css"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function Menu() {
  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>活動内容</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-max">
              <ListItem href="" title="Unity部門">
                Unityやるよ
              </ListItem>
              <ListItem href="" title="アプリ開発部門">
                アプリ開発するよ
              </ListItem>
              <ListItem href="" title="ハッカソン">
                長期休業中にチーム開発するよ
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="">メンバー</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="">プロジェクト</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}


function Header() {
  return (
    <header className="
      flex flex-col sm:flex-row items-center sm:justify-between 
      px-3 sm:px-6 py-2 sm:py-0 gap-2 sm:gap-0
      bg-white border-b border-gray-500
      sticky top-0 z-50 
    ">
      <a href="/" className="flex items-center gap-2">
        <img src="./logo.svg" className="h-12 w-12 object-contain" alt="CIST IT COMMUNITY"/>
        <span className="font-bold text-lg sm:text-xl whitespace-nowrap">
          CIST IT COMMUNITY
        </span>
      </a>
      <div className="sm:ml-auto">
        <Menu />
      </div>
    </header>
  )
}

export default Header;