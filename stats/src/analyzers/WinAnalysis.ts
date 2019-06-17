import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinAnalysis implements Analyzer {

   constructor(public teamName: string) { }

   run(matches: MatchData[]): string {
      let winsCount = 0;
      for (let match of matches) {
         if (match[1] && match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
            winsCount++;
         }
         else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
            winsCount++;
         }
      }
      return `Team ${this.teamName} won ${winsCount} games.`
   }
}