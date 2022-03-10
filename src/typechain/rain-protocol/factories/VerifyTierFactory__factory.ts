/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VerifyTierFactory,
  VerifyTierFactoryInterface,
} from "../VerifyTierFactory";

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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Implementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "child",
        type: "address",
      },
    ],
    name: "NewChild",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "createChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Verify",
        name: "verify_",
        type: "address",
      },
    ],
    name: "createChildTyped",
    outputs: [
      {
        internalType: "contract VerifyTier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maybeChild_",
        type: "address",
      },
    ],
    name: "isChild",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506001600090815560405161002490610096565b604051809103906000f080158015610040573d6000803e3d6000fd5b50604080513381526001600160a01b03831660208201529192507f7fac34ecf0b1b374cd9659e3d17db602659d53f1162b1f20142e6c02694aed70910160405180910390a16001600160a01b03166080526100a3565b6107ff8061068883390190565b6080516105ca6100be60003960006102b501526105ca6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632ea72a4914610046578063b536745114610083578063fc91a89714610096575b600080fd5b610059610054366004610449565b6100df565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100596100913660046104e0565b6101fd565b6100cf6100a43660046104e0565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b604051901515815260200161007a565b600060026000541415610153576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000908155610164848461029d565b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091558151338152908101929092529192507f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a160016000559392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff831660208201526000913091632ea72a4991016040516020818303038152906040526040518263ffffffff1660e01b81526004016102549190610504565b6020604051808303816000875af1158015610273573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102979190610577565b92915050565b6000806102ac838501856104e0565b905060006102d97f0000000000000000000000000000000000000000000000000000000000000000610367565b6040517fc4d66de800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301529192509082169063c4d66de890602401600060405180830381600087803b15801561034657600080fd5b505af115801561035a573d6000803e3d6000fd5b5092979650505050505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff8116610444576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161014a565b919050565b6000806020838503121561045c57600080fd5b823567ffffffffffffffff8082111561047457600080fd5b818501915085601f83011261048857600080fd5b81358181111561049757600080fd5b8660208285010111156104a957600080fd5b60209290920196919550909350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146104dd57600080fd5b50565b6000602082840312156104f257600080fd5b81356104fd816104bb565b9392505050565b600060208083528351808285015260005b8181101561053157858101830151858201604001528201610515565b81811115610543576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561058957600080fd5b81516104fd816104bb56fea26469706673582212203a626e08d85d02b846f1049812733232a9a2d1e0af957304a1c11435b5c1636b64736f6c634300080a0033608060405234801561001057600080fd5b506107df806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638a200fff14610046578063c4d66de81461005b578063e053ea311461006e575b600080fd5b61005961005436600461061f565b610093565b005b6100596100693660046106ee565b6100fa565b61008161007c3660046106ee565b61029c565b60405190815260200160405180910390f35b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f5345545f5449455200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600054610100900460ff166101155760005460ff1615610119565b303b155b6101a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016100f1565b600054610100900460ff161580156101e457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8516908102919091179091556040805133815260208101929092527fdc90fed0326ba91706deeac7eb34ac9f8b680734f9d782864dc29704d23bed6a910160405180910390a1801561029857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b600080546040517f31e658a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152839262010000900416906331e658a590602401606060405180830381865afa158015610313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103379190610724565b600054604080517f42c8a14d000000000000000000000000000000000000000000000000000000008152835163ffffffff90811660048301526020850151811660248301529184015190911660448201524360648201529192506002916201000090910473ffffffffffffffffffffffffffffffffffffffff16906342c8a14d90608401602060405180830381865afa1580156103d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fc9190610790565b14156104415761043a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60006008846020015163ffffffff16610469565b9392505050565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92915050565b60008360088111156104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100f1565b836008811115610543576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100f1565b6000865b8681101561056f5763ffffffff6020820290811b1999909916868a1b17989150600101610547565b5096979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461059e57600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610617576106176105a1565b604052919050565b60008060006060848603121561063457600080fd5b833561063f8161057c565b92506020848101359250604085013567ffffffffffffffff8082111561066457600080fd5b818701915087601f83011261067857600080fd5b81358181111561068a5761068a6105a1565b6106ba847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016105d0565b915080825288848285010111156106d057600080fd5b80848401858401376000848284010152508093505050509250925092565b60006020828403121561070057600080fd5b813561043a8161057c565b805163ffffffff8116811461071f57600080fd5b919050565b60006060828403121561073657600080fd5b6040516060810181811067ffffffffffffffff82111715610759576107596105a1565b6040526107658361070b565b81526107736020840161070b565b60208201526107846040840161070b565b60408201529392505050565b6000602082840312156107a257600080fd5b505191905056fea264697066735822122053fd7d3bed54680711967f8d0fd10fe5cfd21290e63c99367f23b9c0e8b2f80364736f6c634300080a0033";

type VerifyTierFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyTierFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyTierFactory__factory extends ContractFactory {
  constructor(...args: VerifyTierFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VerifyTierFactory> {
    return super.deploy(overrides || {}) as Promise<VerifyTierFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VerifyTierFactory {
    return super.attach(address) as VerifyTierFactory;
  }
  connect(signer: Signer): VerifyTierFactory__factory {
    return super.connect(signer) as VerifyTierFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyTierFactoryInterface {
    return new utils.Interface(_abi) as VerifyTierFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyTierFactory {
    return new Contract(address, _abi, signerOrProvider) as VerifyTierFactory;
  }
}