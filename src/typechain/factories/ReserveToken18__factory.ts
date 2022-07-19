/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReserveToken18,
  ReserveToken18Interface,
} from "../ReserveToken18";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
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
    inputs: [],
    name: "TOTAL_SUPPLY",
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
        name: "account_",
        type: "address",
      },
    ],
    name: "addFreezable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "freezables",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b908401528151919291620000629160039162000211565b5080516200007890600490602084019062000211565b505050620000a33360126009620000909190620002cd565b6200009d90600a620003e7565b620000a9565b62000439565b6001600160a01b038216620001055760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200011360008383620001a0565b8060026000828254620001279190620002cd565b90915550506001600160a01b0382166000908152602081905260408120805483929062000156908490620002cd565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b620001b88383836200020c60201b620005591760201c565b6001600160a01b03821660009081526005602052604090205460ff16156200020c5760405162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b6044820152606401620000fc565b505050565b8280546200021f90620003fc565b90600052602060002090601f0160209004810192826200024357600085556200028e565b82601f106200025e57805160ff19168380011785556200028e565b828001600101855582156200028e579182015b828111156200028e57825182559160200191906001019062000271565b506200029c929150620002a0565b5090565b5b808211156200029c5760008155600101620002a1565b634e487b7160e01b600052601160045260246000fd5b60008219821115620002e357620002e3620002b7565b500190565b600181815b80851115620003295781600019048211156200030d576200030d620002b7565b808516156200031b57918102915b93841c9390800290620002ed565b509250929050565b6000826200034257506001620003e1565b816200035157506000620003e1565b81600181146200036a5760028114620003755762000395565b6001915050620003e1565b60ff841115620003895762000389620002b7565b50506001821b620003e1565b5060208310610133831016604e8410600b8410161715620003ba575081810a620003e1565b620003c68383620002e8565b8060001904821115620003dd57620003dd620002b7565b0290505b92915050565b6000620003f5838362000331565b9392505050565b600181811c908216806200041157607f821691505b602082108114156200043357634e487b7160e01b600052602260045260246000fd5b50919050565b6110b380620004496000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806348422faa116100b2578063902d55a511610081578063a457c2d711610066578063a457c2d71461029e578063a9059cbb146102b1578063dd62ed3e146102c457600080fd5b8063902d55a51461028e57806395d89b411461029657600080fd5b806348422faa146101c55780635bb9058b146101e857806370a082311461024557806379cc67901461027b57600080fd5b80632e0f2625116100ee5780632e0f262514610186578063313ce5671461018e578063395093511461019d57806342966c68146101b057600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461016157806323b872dd14610173575b600080fd5b61012861030a565b6040516101359190610d2f565b60405180910390f35b61015161014c366004610dcb565b61039c565b6040519015158152602001610135565b6002545b604051908152602001610135565b610151610181366004610df5565b6103b6565b610165601281565b60405160128152602001610135565b6101516101ab366004610dcb565b6103da565b6101c36101be366004610e31565b610426565b005b6101516101d3366004610e4a565b60056020526000908152604090205460ff1681565b6101c36101f6366004610e4a565b73ffffffffffffffffffffffffffffffffffffffff16600090815260056020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b610165610253366004610e4a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101c3610289366004610dcb565b610433565b61016561044c565b610128610466565b6101516102ac366004610dcb565b610475565b6101516102bf366004610dcb565b61054b565b6101656102d2366004610e6c565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461031990610e9f565b80601f016020809104026020016040519081016040528092919081815260200182805461034590610e9f565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b5050505050905090565b6000336103aa81858561055e565b60019150505b92915050565b6000336103c4858285610711565b6103cf8585856107e8565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103aa9082908690610421908790610f22565b61055e565b6104303382610aa6565b50565b61043e823383610711565b6104488282610aa6565b5050565b61045860126009610f22565b61046390600a61105a565b81565b60606004805461031990610e9f565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561053e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103cf828686840361055e565b6000336103aa8185856107e8565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610600576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610535565b73ffffffffffffffffffffffffffffffffffffffff82166106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610535565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107e257818110156107d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610535565b6107e2848484840361055e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661088b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610535565b73ffffffffffffffffffffffffffffffffffffffff821661092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610535565b610939838383610c9f565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156109ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610535565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610a33908490610f22565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a9991815260200190565b60405180910390a36107e2565b73ffffffffffffffffffffffffffffffffffffffff8216610b49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610535565b610b5582600083610c9f565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610c0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610535565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290610c47908490611066565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604090205460ff1615610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e00000000000000000000000000000000000000000000000000006044820152606401610535565b600060208083528351808285015260005b81811015610d5c57858101830151858201604001528201610d40565b81811115610d6e576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610dc657600080fd5b919050565b60008060408385031215610dde57600080fd5b610de783610da2565b946020939093013593505050565b600080600060608486031215610e0a57600080fd5b610e1384610da2565b9250610e2160208501610da2565b9150604084013590509250925092565b600060208284031215610e4357600080fd5b5035919050565b600060208284031215610e5c57600080fd5b610e6582610da2565b9392505050565b60008060408385031215610e7f57600080fd5b610e8883610da2565b9150610e9660208401610da2565b90509250929050565b600181811c90821680610eb357607f821691505b60208210811415610eed577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610f3557610f35610ef3565b500190565b600181815b80851115610f9357817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610f7957610f79610ef3565b80851615610f8657918102915b93841c9390800290610f3f565b509250929050565b600082610faa575060016103b0565b81610fb7575060006103b0565b8160018114610fcd5760028114610fd757610ff3565b60019150506103b0565b60ff841115610fe857610fe8610ef3565b50506001821b6103b0565b5060208310610133831016604e8410600b8410161715611016575081810a6103b0565b6110208383610f3a565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561105257611052610ef3565b029392505050565b6000610e658383610f9b565b60008282101561107857611078610ef3565b50039056fea26469706673582212208d35958bcdbd63ba92e845a3f5334175e477cc36bba1738d9a61fb33bf7632ee64736f6c634300080a0033";

type ReserveToken18ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveToken18ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveToken18__factory extends ContractFactory {
  constructor(...args: ReserveToken18ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReserveToken18> {
    return super.deploy(overrides || {}) as Promise<ReserveToken18>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveToken18 {
    return super.attach(address) as ReserveToken18;
  }
  connect(signer: Signer): ReserveToken18__factory {
    return super.connect(signer) as ReserveToken18__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveToken18Interface {
    return new utils.Interface(_abi) as ReserveToken18Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveToken18 {
    return new Contract(address, _abi, signerOrProvider) as ReserveToken18;
  }
}