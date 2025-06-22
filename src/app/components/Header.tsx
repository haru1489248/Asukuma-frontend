import { Session } from "next-auth";
import AuthButtons from "./AuthButtons";
import { AskmaLogo, AskmaText } from "./assets/AskmaLogo";

export default function Header() {
    //TODO サイドバーを表示させるようなjsxを後で書く
    return (
        <header className="flex items-center p-4">
            <AskmaLogo size={48}/>
            <AskmaText size={32}/>
            {/* <div className="flex-1"/>
            <AuthButtons /> */}
        </header>
    )
}
