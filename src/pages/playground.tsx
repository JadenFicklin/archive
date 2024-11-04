import { NextPage } from "next";
import { Button } from "~/components/Button";
import { Dropdown } from "~/components/Dropdown";
import { Input } from "~/components/Input";

const playground: NextPage = () => {
  return (
    <div>
      <Button />
      <Input />
      <Dropdown />
    </div>
  );
};

export default playground;
