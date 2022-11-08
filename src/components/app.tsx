import React, { useRef } from 'react';

import Card from './card';
import TextEditor from './texteditor';
import MessageCard from './messagecard/msgcard';
export interface Page {
  color: string;
}
export class App extends React.Component<Page, {}> {
 
  render() {
 
    const cardTitle = "Card 1";
    const cardTextContents = `The color of this page is: ${0}`

    return (
      <div className='pagecontainer'>
      
        <MessageCard></MessageCard>
        <div className="cardcontainer">
          <Card></Card><Card></Card><Card></Card><Card></Card>
          <Card></Card><Card></Card><Card></Card><Card></Card>
          <Card></Card><Card></Card><Card></Card><Card></Card>
        </div>
        <TextEditor></TextEditor>
      </div>
    );
  }
}

export default App;