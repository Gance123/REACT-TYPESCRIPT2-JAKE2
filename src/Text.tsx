import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FCは内部的にchildrenを受けることになっている　ver.17 => VFC
// FCは内部的にchildrenを受けない from: ver.18

export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
  // style={color: color fontSize: fontSize }}を省略
};
