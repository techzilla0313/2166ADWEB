import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This string is interpolated';
  clientName = 'Adrian';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';  
  
  

  clickCount = 0  
    clickMe() {
      this.clickCount++;
    }
  
    resetClickCount() {
      this.clickCount = 0;
    }
  newColor = '';

    redColor(){
      this.newColor = 'red';
    }

    blueColor(){
      this.newColor = 'blue';
    }

    greenColor(){
      this.newColor = 'green';
    }

    features = [
      {
        icon: 'bi bi-collection',
        title: 'The Art of Latte',
        description: 'When it comes to coffee, there is something undeniably special about a latte. This beloved beverage combines the boldness of espresso with the smoothness of steamed milk, creating a harmonious symphony of flavors.',
        imageUrl: './src/images/latte.jpg',
        alt: 'Latte Image',
      },
      {
        icon: 'bi bi-building',
        title: 'The Perfect Cup: Home-Brewed Organic Coffee Beans',
        description: 'There’s nothing quite like waking up to the aroma of freshly brewed coffee in the morning. And when it comes to the perfect cup, nothing beats the rich and robust flavor of organic coffee beans',
        imageUrl: './src/images/coffeebean.jpg',
        alt: 'Coffee Bean Image',
      },
      {
        icon: 'bi bi-toggles2',
        title: 'The Art of Cold Brew: A Coffee',
        description: 'Cold brew is not your average iced coffee. It’s a method that involves steeping coffee grounds in cold water for an extended period, resulting in a smooth, low-acidity, and full-bodied brew. The secret lies in the slow extraction process, which brings out the best flavors from the coffee beans.',
        imageUrl: './src/images/coldbrew.jpg',
        alt: 'Cold Brew Image',
      },
    ];
}
