/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBPool, IBPoolInterface } from "../IBPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "gulp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPrice",
        type: "uint256",
      },
    ],
    name: "swapExactAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spotPriceAfter",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBPool__factory {
  static readonly abi = _abi;
  static createInterface(): IBPoolInterface {
    return new utils.Interface(_abi) as IBPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBPool {
    return new Contract(address, _abi, signerOrProvider) as IBPool;
  }
}