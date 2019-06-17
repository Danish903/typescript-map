
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCSV("football.csv")
const { matches } = matchReader;
const summay = Summary.winsAnalsisWithHtmlReport("Man City", "report0.html");

matchReader.load();
summay.buildAndPrintReport(matches);
