import * as React from "react";

export default function Provider(props) {
  const state = React.useState(0);
  return props.children(state);
}
