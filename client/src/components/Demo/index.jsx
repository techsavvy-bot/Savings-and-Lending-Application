import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState(" ");

  const demo =
    <>
      <div className="contract-container p-2 mt-2 ">
        <ContractBtns setValue={setValue} />
        <h3></h3>
        <Contract value={value} />
      </div>
    </>;

  return (
    <div className="container bg-success rounded mt-1 text-white">
      <div className="demo">
        <Title />
        {
          !state.artifact ? <NoticeNoArtifact /> :
            !state.contract ? <NoticeWrongNetwork /> :
              demo
        }
      </div>
    </div>
  );
}

export default Demo;
