import React from 'react';

type State = {
  date: Date;
};

export class Watch extends React.Component {
  state: State = {
    date: new Date(),
  };
  timerID = 0;
  componentDidMount(): void {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render(): React.ReactNode {
    return <div>{this.state.date.toLocaleTimeString('ru-Ru')}</div>;
  }
}
