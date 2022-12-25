import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";

const injected = new InjectedConnector({
  supportedChainIds: [137, 80001, 1, 4],
});

export const useMetamask = () => {
  const { active, activate, account, chainId, error, deactivate, library } =
    useWeb3React();

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      activate(injected, undefined, true);
    });
  }, [activate]);

  const connectMetamask = async () => {
    try {
      {
        await activate(injected, undefined, true);
      }
    } catch (err) {
      console.log(err, "Error in connecting metamask");
    }
  };

  const disconnectWallet = async () => {
    try {
      deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    active,
    account,

    chainId,
    disconnectWallet,
    connectMetamask,
    library,
  };
};
