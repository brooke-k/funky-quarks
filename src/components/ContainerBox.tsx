import React from "react";

export function Containment(props: any) {
  return <div className="containerBox">{this.props}</div>;
}

export class ContainerBox extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className="containerBox">{this.props}</div>;
  }
}
