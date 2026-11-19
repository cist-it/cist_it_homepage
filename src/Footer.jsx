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
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        
        {/* スマホ: 縦並び(flex-col) / PC(md以上): 横並び(md:flex-row) */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* ロゴ（スマホでは上、PCでは左） */}
          <a
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img
              src="/cist_icon.png"
              alt="CIST Logo"
              className="h-10 w-auto rounded-md bg-white p-1 object-contain"
            />
            <span className="text-lg font-bold tracking-tight">CIST</span>
          </a>

          {/* リンク一覧（スマホでは縦並びで押しやすく、PCでは横並び） */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
              <li>
                <a
                  href="/members"
                  className="inline-block py-1 text-sm font-medium text-zinc-300 underline underline-offset-4 transition-colors hover:text-white"
                >
                  メンバー紹介
                </a>
              </li>
              <li>
                <a
                  href="/clubs"
                  className="inline-block py-1 text-sm font-medium text-zinc-300 underline underline-offset-4 transition-colors hover:text-white"
                >
                  サークル紹介
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="inline-block py-1 text-sm font-medium text-zinc-300 underline underline-offset-4 transition-colors hover:text-white"
                >
                  プロジェクト一覧
                </a>
              </li>
            </ul>
          </nav>

        </div>

        {/* 下部：区切り線とコピーライト */}
        <div className="mt-8 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} CIST. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer