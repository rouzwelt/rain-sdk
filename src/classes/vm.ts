import { BytesLike, BigNumberish, utils } from 'ethers';

const { concat, hexlify, zeroPad } = utils;

/**
 * @public
 */
export interface StateConfig {
  sources: BytesLike[];
  constants: BigNumberish[];
  stackLength: BigNumberish;
  argumentsLength: BigNumberish;
}

/**
 * @public
 */
export interface State {
  stackIndex: BigNumberish;
  stack: BigNumberish[];
  sources: BytesLike[];
  constants: BigNumberish[];
  arguments: BigNumberish[];
}

/**
 * @public
 *
 * All the standard Op Codes
 */
export enum AllStandardOps {
  /**
   * @deprecated **DONT USE SKIP!**
   *
   * It is a skip as this is the fallback value for unset solidity bytes.
   * Any additional "whitespace" in rain scripts will be noops as `0 0` is
   * "skip self". The val can be used to skip additional opcodes but take
   * care to not underflow the source itself.
   */
  SKIP,
  /**
   * Copies a value either off `constants` or `arguments` to the top of
   * the stack. The high bit of the operand specifies which, `0` for
   * `constants` and `1` for `arguments`.
   */
  VAL,
  /**
   * Duplicates the value at index `operand_` to the top of the stack
   */
  DUP,
  /**
   * Takes N values off the stack, interprets them as an array then zips
   * and maps a source from `sources` over them. The source has access to
   * the original constants using `1 0` and to zipped arguments as `1 1`.
   */
  ZIPMAP,
  /**
   * ABI encodes the entire stack and logs it to the hardhat console.
   */
  DEBUG,
  BLOCK_NUMBER,
  BLOCK_TIMESTAMP,
  SENDER,
  THIS_ADDRESS,
  SCALE18_MUL,
  SCALE18_DIV,
  SCALE18,
  SCALEN,
  SCALE_BY,
  SCALE18_ONE,
  SCALE18_DECIMALS,
  ADD,
  SATURATING_ADD,
  SUB,
  SATURATING_SUB,
  MUL,
  SATURATING_MUL,
  DIV,
  MOD,
  EXP,
  MIN,
  MAX,
  ISZERO,
  EAGER_IF,
  EQUAL_TO,
  LESS_THAN,
  GREATER_THAN,
  EVERY,
  ANY,
  REPORT,
  NEVER,
  ALWAYS,
  SATURATING_DIFF,
  UPDATE_BLOCKS_FOR_TIER_RANGE,
  SELECT_LTE,
  IERC20_BALANCE_OF,
  IERC20_TOTAL_SUPPLY,
  IERC721_BALANCE_OF,
  IERC721_OWNER_OF,
  IERC1155_BALANCE_OF,
  IERC1155_BALANCE_OF_BATCH,
  length,
}

/**
 * @public
 *
 *
 */
export class VM {
  /**
   * All the standard Op Codes
   */
  public static Opcodes = { ...AllStandardOps };

  /**
   * Converts an opcode and operand to bytes, and returns their concatenation.
   *
   * @param code - the opcode
   * @param erand - the operand, currently limited to 1 byte (defaults to 0)
   */
  public static op = (
    code: number,
    erand: number | BytesLike | utils.Hexable = 0
  ): Uint8Array => {
    return concat([this.bytify(code), this.bytify(erand)]);
  };

  /**
   * @public
   * Converts a value to raw bytes representation. Assumes `value` is less than or equal to 1 byte,
   * unless a desired `bytesLength` is specified.
   *
   * @param value - value to convert to raw bytes format
   * @param bytesLength - (defaults to 1) number of bytes to left pad if `value` doesn't completely
   * fill the desired amount of memory. Will throw `InvalidArgument` error if value already exceeds
   * bytes length.
   * @returns raw bytes representation as Uint8Array
   */
  public static bytify(
    value: number | BytesLike | utils.Hexable,
    bytesLength = 1
  ): BytesLike {
    return zeroPad(hexlify(value), bytesLength);
  }

  /**
   * Concatenates all the BytesLike in array into a single Uint8Array.
   */
  public static concat = concat;

  /**
   * Create a VM sources to be ready to use in any call just providing the combination desired.
   *
   * @param OPerands - All the configuration with the opcodes and operands. If any combination
   * does not have an operand with an opcode, a 0 (zero) will be use with the opcode as the
   * operand. Please @see OPerand
   *
   * @returns
   */
  public static createVMSources(OPerands: OPerand[]): [Uint8Array] {
    return [VM.concat(OPerands.map(x => VM.op(x[0], x[1] || 0)))];
  }
}

/**
 * Parameter that will use to converted to the source.
 *
 * Use an opcode and operand to bytes ->  [opcodoperand]
 *
 */
type OPerand = [number, (number | BytesLike | utils.Hexable)?];
