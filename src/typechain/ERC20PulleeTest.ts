/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC20PulleeTestInterface extends utils.Interface {
  functions: {
    "approve(address,address,uint256)": FunctionFragment;
    "endDistribution(address,address)": FunctionFragment;
    "grantReceiver(address,address)": FunctionFragment;
    "grantSender(address,address)": FunctionFragment;
    "redeem(address,address[],uint256)": FunctionFragment;
    "transfer(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endDistribution",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantReceiver",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantSender",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;

  events: {};
}

export interface ERC20PulleeTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20PulleeTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endDistribution(
      token_: string,
      distributor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    grantReceiver(
      token_: string,
      receiver_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    grantSender(
      token_: string,
      sender_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeem(
      token_: string,
      assets_: string[],
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transfer(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    token_: string,
    recipient_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endDistribution(
    token_: string,
    distributor_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  grantReceiver(
    token_: string,
    receiver_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  grantSender(
    token_: string,
    sender_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeem(
    token_: string,
    assets_: string[],
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transfer(
    token_: string,
    recipient_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endDistribution(
      token_: string,
      distributor_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    grantReceiver(
      token_: string,
      receiver_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    grantSender(
      token_: string,
      sender_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      token_: string,
      assets_: string[],
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transfer(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approve(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endDistribution(
      token_: string,
      distributor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    grantReceiver(
      token_: string,
      receiver_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    grantSender(
      token_: string,
      sender_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeem(
      token_: string,
      assets_: string[],
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transfer(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endDistribution(
      token_: string,
      distributor_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    grantReceiver(
      token_: string,
      receiver_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    grantSender(
      token_: string,
      sender_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      token_: string,
      assets_: string[],
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transfer(
      token_: string,
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}