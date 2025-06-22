import { RxHamburgerMenu } from "react-icons/rx";
import { AskmaLogoText } from "./assets/AskmaLogo/AskmaLogo";

export default function Header() {
    //TODO サイドバーを表示させるようなjsxを後で書く
    return (
        <header className="flex items-center p-4 border-b border-gray-200">
            <AskmaLogoText size={32}/>
            <div className="flex-1"/>
            <button className="pr-2">
              <RxHamburgerMenu />
            </button>
        </header>
    )
}
