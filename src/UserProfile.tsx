import { FC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};
// user: {name: string; hobbies: Array<string>}

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>趣味</dt>
        <dd>{user.hobbies?.join("/")}</dd>
        {/*join=>()内で設定した文字列で配列をくっつけて一つの文字列にする */}
      </dl>
    </>
  );
};
