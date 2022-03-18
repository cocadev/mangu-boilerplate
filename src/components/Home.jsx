import React, { useState } from "react";
import { Card, Typography, Button } from "antd";
import { useMoralis } from "react-moralis";
import abi from "../contracts/ERC1155CustomUpgradeableV1.json";
import {CONFIG} from "../config";
import Web3EthContract from "web3-eth-contract";

export default function QuickStart() {

  const { account } = useMoralis();
  const [isLoading, setIsLoading] = useState(false);
  const mintAmount = 1;

  let cost = CONFIG.WEI_COST;
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalCostWei = String(cost * mintAmount);
  let totalGasLimit = String(gasLimit * mintAmount);

  const runContractFunction = async () => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);

    setIsLoading(true);

    var erc_721 = new Web3EthContract(abi, CONFIG.CONTRACT_ADDRESS);

    await erc_721.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        // setFeedback("Sorry, something went wrong please try again later.");
        // setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        // setFeedback(
        //   `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        // );
        // setClaimingNft(false);
        // dispatch(fetchData(blockchain.account));
      });

    setIsLoading(false);
  }



  return (
    <div style={{ display: "flex" }}>
      <Card
        bordered={false}
        style={{
          width: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography.Title level={3}>NFT Minter</Typography.Title>
        <img
          src="example.gif"
          alt="Test"
          style={{ marginBottom: "2rem", width: 400, borderRadius: 20, border: '4px dashed purple' }}
        />
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{ width: "100%" }}
          loading={isLoading}
          onClick={() => runContractFunction()}
        >
          MINT
        </Button>
      </Card>
    </div>
  );
}
