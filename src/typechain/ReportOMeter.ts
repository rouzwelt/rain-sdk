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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ReportOMeterInterface extends utils.Interface {
  functions: {
    "gaugeReport(address,address,uint256[])": FunctionFragment;
    "gaugeReportTimeForTier(address,address,uint256,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "gaugeReport",
    values: [string, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "gaugeReportTimeForTier",
    values: [string, string, BigNumberish, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "gaugeReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gaugeReportTimeForTier",
    data: BytesLike
  ): Result;

  events: {
    "Report(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Report"): EventFragment;
}

export type ReportEvent = TypedEvent<[BigNumber], { report: BigNumber }>;

export type ReportEventFilter = TypedEventFilter<ReportEvent>;

export interface ReportOMeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReportOMeterInterface;

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
    gaugeReport(
      tierContract_: string,
      account_: string,
      context_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gaugeReportTimeForTier(
      tierContract_: string,
      account_: string,
      tier_: BigNumberish,
      context_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  gaugeReport(
    tierContract_: string,
    account_: string,
    context_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gaugeReportTimeForTier(
    tierContract_: string,
    account_: string,
    tier_: BigNumberish,
    context_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    gaugeReport(
      tierContract_: string,
      account_: string,
      context_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    gaugeReportTimeForTier(
      tierContract_: string,
      account_: string,
      tier_: BigNumberish,
      context_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Report(uint256)"(report?: null): ReportEventFilter;
    Report(report?: null): ReportEventFilter;
  };

  estimateGas: {
    gaugeReport(
      tierContract_: string,
      account_: string,
      context_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gaugeReportTimeForTier(
      tierContract_: string,
      account_: string,
      tier_: BigNumberish,
      context_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    gaugeReport(
      tierContract_: string,
      account_: string,
      context_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gaugeReportTimeForTier(
      tierContract_: string,
      account_: string,
      tier_: BigNumberish,
      context_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}