import { Box, Button, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import React, { useState } from "react";
const Home = () => {
  const [balance, setBalance] = useState(0);

  // Making injected setup ready here
  const injected = new InjectedConnector({
    supportedChainIds: [137, 80001, 1, 4],
  });

  // Getting all the functions of useWeb3React library
  const { account, chainId, activate, active, library } = useWeb3React();

  // Fn to enable wallet
  const connectWallet = async () => {
    await activate(injected);
  };

  // Fn to get user native token balance
  const getUserBalance = async () => {
    library?.getBalance(account).then((result) => {
      setBalance(result / 1e18);
    });
  };

  // Fn to switch the network to desired one
  const switchNetwork = async () => {
    // Switching to Polygon Mainnet here
    await library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x89" }],
    });
  };

  return (
    <div style={{ paddingTop: 50 }}>
      {console.log(account)}
      {console.log(active)}
      {console.log(chainId)}
      {console.log(library)}
      <h1 style={{ color: "white", textAlign: "center" }}>
        Wallet Connection Example
      </h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            padding: "6px",
            border: "8px solid #000",
            borderRadius: "50%",
            background: "#fff",
            marginRight: "-50px",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: 70,
              height: 70,
              fontWeight: 700,

              background: "#8447e7",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: 110,
            height: "100%",
            background: "#8447e7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
            padding: "25px 25px 25px 75px",
            marginTop: "12.5px",
            borderRadius: 10,
          }}
        >
          <Typography
            variant="body2"
            align="left"
            sx={{
              fontWeight: 700,
              fontSize: 30,
              lineHeight: "60%",
              color: "#f9f9f9",
            }}
          >
            CONNECT METAMASK
            <br />
            <br />
            <span
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Address of connected wallet is:{" "}
              <strong style={{ fontSize: 13, color: "black" }}>
                {account}
              </strong>
            </span>
          </Typography>
          <Button
            onClick={connectWallet}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "280px",
              height: "50px",
              background: "#000",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: 18,
              lineHeight: "33px",
              color: "#f9f9f9",
              textDecoration: "none",
              whiteSpace: "nowrap",
              padding: "5px 30px 5px 30px",
              "&:hover": {
                background: "#000",
              },
            }}
          >
            {active ? "Connected" : "Connect Wallet"}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            padding: "6px",
            border: "8px solid #000",
            borderRadius: "50%",
            background: "#fff",
            marginRight: "-50px",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: 70,
              height: 70,
              fontWeight: 700,

              background: "#8447e7",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: 110,
            height: "100%",
            background: "#8447e7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
            padding: "25px 25px 25px 75px",
            marginTop: "12.5px",
            borderRadius: 10,
          }}
        >
          <Typography
            variant="body2"
            align="left"
            sx={{
              fontWeight: 700,
              fontSize: 30,
              lineHeight: "60%",
              color: "#f9f9f9",
            }}
          >
            Get User Balance
            <br />
            <br />
            <span
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              MATIC:{" "}
              <strong style={{ fontSize: 13, color: "black" }}>
                {balance}
              </strong>
            </span>
          </Typography>
          <Button
            onClick={getUserBalance}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "280px",
              height: "50px",
              background: "#000",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: 18,
              lineHeight: "33px",
              color: "#f9f9f9",
              textDecoration: "none",
              whiteSpace: "nowrap",
              padding: "5px 30px 5px 30px",
              "&:hover": {
                background: "#000",
              },
            }}
          >
            Get Balance
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            padding: "6px",
            border: "8px solid #000",
            borderRadius: "50%",
            background: "#fff",
            marginRight: "-50px",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: 70,
              height: 70,
              fontWeight: 700,

              background: "#8447e7",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            3
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: 110,
            height: "100%",
            background: "#8447e7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
            padding: "25px 25px 25px 75px",
            marginTop: "12.5px",
            borderRadius: 10,
          }}
        >
          <Typography
            variant="body2"
            align="left"
            sx={{
              fontWeight: 700,
              fontSize: 30,
              lineHeight: "60%",
              color: "#f9f9f9",
            }}
          >
            ChainId
            <br />
            <br />
            <span
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Current Chain Id:{" "}
              <strong style={{ fontSize: 13, color: "black" }}>
                {chainId}
              </strong>
            </span>
          </Typography>
          <Button
            onClick={switchNetwork}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "280px",
              height: "50px",
              background: "#000",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: 18,
              lineHeight: "33px",
              color: "#f9f9f9",
              textDecoration: "none",
              whiteSpace: "nowrap",
              padding: "5px 30px 5px 30px",
              "&:hover": {
                background: "#000",
              },
            }}
          >
            Change Network
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
