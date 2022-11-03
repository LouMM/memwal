import * as React from 'react';

import Card from './card';

export interface Page {
  color: string;
}
export class App extends React.Component<Page, {}> {
  render() {
    const cardTitle = "Card 1";
    const cardTextContents = `The color of this page is: ${0}`

    return (
      <div className='pagecontainer'>
        <div className="cardcontainer">
          <Card></Card><Card></Card><Card></Card><Card></Card>
          <Card></Card><Card></Card><Card></Card><Card></Card>
          <Card></Card><Card></Card><Card></Card><Card></Card>
        </div>
      </div>
    );
  }
}

export default App;