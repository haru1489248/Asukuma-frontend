import React from "react";
import fs from "fs";
import { AskmaLogo } from "../src/app/components/assets/AskmaLogo/AskmaLogo";   // あなたのコード
import ReactDOMServer from "react-dom/server";

const svg = ReactDOMServer.renderToStaticMarkup(<AskmaLogo size={512} />);
fs.writeFileSync("askma.svg", svg);
console.log("✅ askma.svg 書き出し完了");
