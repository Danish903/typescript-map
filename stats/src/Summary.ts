import { MatchData } from "./MatchData";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { HtmlReport } from "./reports/HtmlReport";

export interface Analyzer {
   run(matches: MatchData[]): string;
}
export interface OutputTarget {
   print(report: string): void;
}

export class Summary {

   static winsAnalsisWithHtmlReport(teamName: string, filename: string): Summary {
      return new Summary(new WinAnalysis(teamName), new HtmlReport(filename))
   }
   constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

   buildAndPrintReport(matchData: MatchData[]): void {
      this.outputTarget.print(this.analyzer.run(matchData));
   }

}