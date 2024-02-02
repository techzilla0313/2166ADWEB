import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showGames = false;
  showRan = false;
  showRagnarok = false;
  showDN = false;

  toggleGames() {
    this.showGames = !this.showGames;
    // Ensure to hide other content when 'Games' button is clicked
    this.showRan = false;
    this.showRagnarok = false;
    this.showDN = false;
  }

  toggleContent(game: string) {
    // Reset all content visibility
    this.showRan = false;
    this.showRagnarok = false;
    this.showDN = false;

    // Toggle the visibility of the selected game's content
    if (game === 'ran') {
      this.showRan = true;
    } else if (game === 'ragnarok') {
      this.showRagnarok = true;
    } else if (game === 'dn') {
      this.showDN = true;
    }
  }
}
