import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };
  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  return (
    <div className="btns">
      <h5>Enter the amount for Lend</h5>
      <div>
        <div class="mb-2 m-1" >
          <input
            type="text"
            placeholder="$100"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="button" class="btn btn-primary" onClick={write}>Lend</button>
      <h5>Amount lended</h5>
      <button type="button" class="btn btn-secondary" onClick={read}>Get</button>
    </div>
  );
}

export default ContractBtns;
