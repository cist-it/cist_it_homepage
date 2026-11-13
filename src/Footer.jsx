import './Footer.css'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import "./index.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 左側：ロゴ */}
        <a href="/" className="footer-left">
          <img src="/cist_icon.svg" alt="CIST Logo" className="footer-logo" />
        </a>

        {/* 右側：NavigationMenu */}
        <div className="footer-right">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/members">メンバー紹介</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/clubs">サークル紹介</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/projects">プロジェクト一覧</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer>
  )
}

export default Footer