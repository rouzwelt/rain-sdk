/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OrderBookStateBuilder,
  OrderBookStateBuilderInterface,
} from "../OrderBookStateBuilder";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "InvalidCodeAtRange",
    type: "error",
  },
  {
    inputs: [],
    name: "WriteError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vm_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        internalType: "struct StateConfig",
        name: "config_",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "entrypoint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minFinalStackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stackLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "argumentsLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "opcodesLength",
            type: "uint256",
          },
        ],
        internalType: "struct Bounds[]",
        name: "boundss_",
        type: "tuple[]",
      },
    ],
    name: "buildState",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        internalType: "struct StateConfig",
        name: "stateConfig_",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "entrypoint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minFinalStackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stackLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "argumentsLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "opcodesLength",
            type: "uint256",
          },
        ],
        internalType: "struct Bounds",
        name: "bounds_",
        type: "tuple",
      },
    ],
    name: "ensureIntegrity",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "packedFnPtrs_",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "source_",
        type: "bytes",
      },
    ],
    name: "ptrSource",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stackPopsFnPtrs",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stackPushesFnPtrs",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5062000031620000206200005d565b620000db60201b62000c511760201c565b6001600160a01b03166080526200004b6200002062000150565b6001600160a01b031660a052620006c0565b6060620000746200019e60201b62000cdc1760201c565b620000b4604080516060810182526001600160401b0362000522602090811b62000ff4178216818401526200051c901b62000fee17168183015290815290565b604051602001620000c792919062000645565b604051602081830303815290604052905090565b6000806200011583604051602001620000f5919062000666565b6040516020818303038152906040526200036360201b62000e531760201c565b90508051602082016000f091506001600160a01b0382166200014a5760405163046a55db60e11b815260040160405180910390fd5b50919050565b6060620001676200039160201b62000e7f1760201c565b604080516060810182526001600160401b0362000522602090811b62000ff4179190911690820181905281830152908152620000b4565b604080516105808101825260006020808301829052928201819052606082018190526080820181905260a0820181905260c08201526001600160401b0362000516831b62000fe817811660e08301819052610100830181905261012083018190526101408301526200051c831b62000fee1781166101608301819052610180830181905262000522841b62000ff41782166101a084018190526101c084018190526101e0840181905262000528851b62000ffa178316610200850181905261022085018190526102408501819052610260850181905261028085018190526102a085018190526102c085018190526102e0850181905261030085018190526103208501819052610340850181905261036085018290526200056f861b6200106917841661038086018190526103a086018490526103c086018490526103e08601849052610400860182905261042086019190915261044085018390526104608501839052610480850183905262000575861b6200106f1784166104a08601526104c085018390526104e08501919091526105008401829052610520840191909152610540830152620005be90921b620010e21790911661056080830191909152815290565b60608151826040516020016200037b92919062000682565b6040516020818303038152906040529050919050565b604080516105808101825260006020808301829052928201819052606082018190526080820181905260a0820181905260c08201526001600160401b0362000522831b62000ff417811660e08301819052610100830181905261012083018190526101408301819052610160830181905261018083018190526101a083018190526101c083018190526101e08301819052610200830181905261022083018190526102408301819052610260830181905261028083018190526102a083018190526102c083018190526102e08301819052610300830181905261032083018190526103408301819052610360830181905261038083018190526103a083018190526103c083018190526103e08301819052610400830181905261042083018190526104408301819052610460830181905261048083018190526104a083018190526104c083018190526104e08301819052610500830181905261052083018190526105408301526200052890921b62000ffa1790911661056080830191909152815290565b50600090565b50600290565b50600190565b60008082116200056b5760405162461bcd60e51b81526020600482015260096024820152680c17d3d4115490539160ba1b60448201526064015b60405180910390fd5b5090565b50600390565b6000601f821680620005b85760405162461bcd60e51b815260206004820152600b60248201526a10905117d3d4115490539160aa1b604482015260640162000562565b92915050565b6000808211620005fd5760405162461bcd60e51b81526020600482015260096024820152680c17d3d4115490539160ba1b604482015260640162000562565b5060020260010190565b6000815160005b818110156200062a57602081850181015186830152016200060e565b818111156200063a576000828601525b509290920192915050565b60006200065e62000657838662000607565b8462000607565b949350505050565b6000815260006200067b600183018462000607565b9392505050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b600582015260006200065e600e83018462000607565b60805160a051611f0e620006e66000396000610711015260006106e40152611f0e6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80634fc976e9116100505780634fc976e91461009d5780639b0bc349146100b2578063a46c2a31146100c557600080fd5b806317376ae01461006c5780634127338614610095575b600080fd5b61007f61007a3660046119e3565b6100cd565b60405161008c9190611b01565b60405180910390f35b61007f6104c8565b6100b06100ab366004611b52565b610670565b005b61007f6100c0366004611ba2565b610974565b61007f610ac5565b606060006100da85611157565b905060008573ffffffffffffffffffffffffffffffffffffffff1663e0419ae36040518163ffffffff1660e01b81526004016040805180830381865afa158015610128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014c9190611c06565b60200151905060008060005b86518110156102f0578387828151811061017457610174611c55565b602002602001015160a0018181525050600285518161019557610195611c84565b048782815181106101a8576101a8611c55565b602002602001015160c00181815250506101db888883815181106101ce576101ce611c55565b6020026020010151610670565b61020b8782815181106101f0576101f0611c55565b6020026020010151608001518461129590919063ffffffff16565b925061023d87828151811061022257610222611c55565b6020026020010151606001518361129590919063ffffffff16565b915086818151811061025157610251611c55565b60200260200101516020015187828151811061026f5761026f611c55565b60200260200101516040015110156102e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f46494e414c5f535441434b5f494e44455800000000000000000000000000000060448201526064015b60405180910390fd5b600101610158565b506000828860200151510167ffffffffffffffff811115610313576103136116b2565b60405190808252806020026020018201604052801561033c578160200160208202803683370190505b50905060005b886020015151811015610392578860200151818151811061036557610365611c55565b602002602001015182828151811061037f5761037f611c55565b6020908102919091010152600101610342565b5087515160009067ffffffffffffffff8111156103b1576103b16116b2565b6040519080825280602002602001820160405280156103e457816020015b60608152602001906001900390816103cf5790505b50905060005b8951518110156104405761041b878b60000151838151811061040e5761040e611c55565b6020026020010151610974565b82828151811061042d5761042d611c55565b60209081029190910101526001016103ea565b506104b86040518060a00160405280600081526020018567ffffffffffffffff81111561046f5761046f6116b2565b604051908082528060200260200182016040528015610498578160200160208202803683370190505b5081526020018381526020018481526020018b60200151518152506112ac565b96505050505050505b9392505050565b604080516105808101825260006020820181905291810182905260608181018390526080820183905260a0820183905260c0820192909252610ff460e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082018190526102408201819052610260820181905261028082018190526102a082018190526102c082018190526102e08201819052610300820181905261032082018190526103408201819052610360820181905261038082018190526103a082018190526103c082018190526103e08201819052610400820181905261042082018190526104408201819052610460820181905261048082018190526104a082018190526104c082018190526104e0820181905261050082018190526105208201819052610540820152610ffa61056080830191909152815260408051606081018252610ff460208201819052818301529081525b60405160200161065c929190611cb3565b604051602081830303815290604052905090565b805182515181106106dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4d494e5f534f555243455300000000000000000000000000000000000000000060448201526064016102df565b60006107087f00000000000000000000000000000000000000000000000000000000000000006113e9565b905060006107357f00000000000000000000000000000000000000000000000000000000000000006113e9565b905060008080600080602088026020018a5101519050805193505b838510156108f9576002850194508481015180601e1a935080601f1a925050600683101561081457826107a457896020015151896080015101821061079457600080fd5b60408901805160010190526107fb565b60018314156107bd578860400151821061079457600080fd5b60028314156107d65760408901805160010190526107fb565b60038314156107fb578860a0015182106107ef57600080fd5b60408901805160010190525b600483141561080f5761080f8a8a84611417565b6108dc565b8860c001518310610881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016102df565b6020838102888101820151908801909101516108a08463ffffffff8416565b60408c018051919091039081905260608c01516108bc91611295565b60608c01526108ce8463ffffffff8316565b60408c018051909101905250505b604089015160608a01516108ef91611295565b60608a0152610750565b606089015160ff1015610968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4d41585f535441434b000000000000000000000000000000000000000000000060448201526064016102df565b50505050505050505050565b805160609060028106156109e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f44445f534f555243455f4c454e47544800000000000000000000000000000060448201526064016102df565b60006002600383020467ffffffffffffffff811115610a0557610a056116b2565b6040519080825280601f01601f191660200182016040528015610a2f576020820181803683370190505b509050600660018381018160005b82821015610ab75781890151601f1a6002830615610a995785811015610a6b57600182019181908801602101535b858110610a9957600281026002018b015180601e1a83602001890153600183019260ff821690890160210153505b60028306610aaa5780826020018801535b5060019182019101610a3d565b509398975050505050505050565b60408051610580810182526000602080830182905282840182905260608084018390526080840183905260a0840183905260c0840192909252610fe860e0840181905261010084018190526101208401819052610140840152610fee61016084018190526101808401819052610ff46101a085018190526101c085018190526101e08501819052610ffa610200860181905261022086018190526102408601819052610260860181905261028086018190526102a086018190526102c086018190526102e08601819052610300860181905261032086018190526103408601819052610360860182905261106961038087018190526103a087018490526103c087018490526103e08701849052610400870182905261042087019190915261044086018390526104608601839052610480860183905261106f6104a08701526104c086018390526104e08601829052610500860183905261052086018390526105408601526110e26105608087019190915285528551808501875292830152818501529283529161064b565b600080610c7c83604051602001610c689190611ce2565b604051602081830303815290604052610e53565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216610cd6576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b6040805161058081018252600060208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152610fe860e0820181905261010082018190526101208201819052610140820152610fee61016082018190526101808201819052610ff46101a083018190526101c083018190526101e08301819052610ffa610200840181905261022084018190526102408401819052610260840181905261028084018190526102a084018190526102c084018190526102e08401819052610300840181905261032084018190526103408401819052610360840182905261106961038085018190526103a085018490526103c085018490526103e08501849052610400850182905261042085019190915261044084018390526104608401839052610480840183905261106f6104a08501526104c084018390526104e084019190915261050083018290526105208301919091526105408201526110e261056082810191909152815290565b6060815182604051602001610e69929190611d08565b6040516020818303038152906040529050919050565b6040805161058081018252600060208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152610ff460e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082018190526102408201819052610260820181905261028082018190526102a082018190526102c082018190526102e08201819052610300820181905261032082018190526103408201819052610360820181905261038082018190526103a082018190526103c082018190526103e08201819052610400820181905261042082018190526104408201819052610460820181905261048082018190526104a082018190526104c082018190526104e0820181905261050082018190526105208201819052610540820152610ffa61056082810191909152815290565b50600090565b50600290565b50600190565b6000808211611065576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f4f504552414e44000000000000000000000000000000000000000000000060448201526064016102df565b5090565b50600390565b6000601f8216806110dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4241445f4f504552414e4400000000000000000000000000000000000000000060448201526064016102df565b92915050565b600080821161114d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f4f504552414e44000000000000000000000000000000000000000000000060448201526064016102df565b5060020260010190565b73ffffffffffffffffffffffffffffffffffffffff80821660009081526020819052604081205460609261118b91166113e9565b90508051600014156110dc576112386112338473ffffffffffffffffffffffffffffffffffffffff1663f2cd6c086040518163ffffffff1660e01b8152600401600060405180830381865afa1580156111e8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261122e9190810190611d9f565b6114b6565b610c51565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260208190526040902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556104c183611157565b6000818310156112a557816104c1565b5090919050565b606060008260600151905060006018846040015151901b60108560800151901b6008866020015151901b866060015151171717905060008160001b836040516020016112f89190611e16565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526113349291602001611e4c565b604051602081830303815290604052905060005b8560400151518110156113e057818660400151828151811061136c5761136c611c55565b60200260200101515160001b8760400151838151811061138e5761138e611c55565b60200260200101516040516020016113a893929190611e72565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529150600101611348565b50949350505050565b60606110dc8260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115c0565b6040820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600584901c91829003019182905260608401516001909101916114619190611295565b606084015260808301516114759082611295565b60808401528251600783168085526001600385811c161b919060005b838110156114ab576114a38888610670565b600101611491565b505090935250505050565b606060208251816114c9576114c9611c84565b0615611531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f464e5f505452535f4c454e475448000000000000000000000000000060448201526064016102df565b6000601083518161154457611544611c84565b0467ffffffffffffffff81111561155d5761155d6116b2565b6040519080825280601f01601f191660200182016040528015611587576020820181803683370190505b509050600060025b84518210156115b757808301805160208488018101519091179091529091019060020161158f565b50909392505050565b6060833b806115df5750506040805160208101909152600081526104c1565b808411156115fd5750506040805160208101909152600081526104c1565b83831015611648576040517f2c4a89fa0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604481018490526064016102df565b838303848203600082821061165d578261165f565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050509392505050565b6116b0611ea9565b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611704576117046116b2565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611751576117516116b2565b604052919050565b600067ffffffffffffffff821115611773576117736116b2565b5060051b60200190565b600067ffffffffffffffff821115611797576117976116b2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126117d457600080fd5b81356117e76117e28261177d565b61170a565b8181528460208386010111156117fc57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261182a57600080fd5b8135602061183a6117e283611759565b82815260059290921b8401810191818101908684111561185957600080fd5b8286015b84811015611874578035835291830191830161185d565b509695505050505050565b60006040828403121561189157600080fd5b6118996116e1565b9050813567ffffffffffffffff808211156118b357600080fd5b818401915084601f8301126118c757600080fd5b813560206118d76117e283611759565b82815260059290921b840181019181810190888411156118f657600080fd5b8286015b8481101561192e578035868111156119125760008081fd5b6119208b86838b01016117c3565b8452509183019183016118fa565b508652508581013593508284111561194557600080fd5b61195187858801611819565b818601525050505092915050565b600060e0828403121561197157600080fd5b60405160e0810181811067ffffffffffffffff82111715611994576119946116b2565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201525092915050565b6000806000606084860312156119f857600080fd5b833573ffffffffffffffffffffffffffffffffffffffff81168114611a1c57600080fd5b925060208481013567ffffffffffffffff80821115611a3a57600080fd5b611a468883890161187f565b94506040870135915080821115611a5c57600080fd5b508501601f81018713611a6e57600080fd5b8035611a7c6117e282611759565b81815260e0918202830184019184820191908a841115611a9b57600080fd5b938501935b83851015611ac157611ab28b8661195f565b83529384019391850191611aa0565b5080955050505050509250925092565b60005b83811015611aec578181015183820152602001611ad4565b83811115611afb576000848401525b50505050565b6020815260008251806020840152611b20816040850160208701611ad1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000806101008385031215611b6657600080fd5b823567ffffffffffffffff811115611b7d57600080fd5b611b898582860161187f565b925050611b99846020850161195f565b90509250929050565b60008060408385031215611bb557600080fd5b823567ffffffffffffffff80821115611bcd57600080fd5b611bd9868387016117c3565b93506020850135915080821115611bef57600080fd5b50611bfc858286016117c3565b9150509250929050565b600060408284031215611c1857600080fd5b6040516040810181811067ffffffffffffffff82111715611c3b57611c3b6116b2565b604052825181526020928301519281019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008351611cc5818460208801611ad1565b835190830190611cd9818360208801611ad1565b01949350505050565b6000815260008251611cfb816001850160208701611ad1565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f30000000000000000000000000000000000000000000000600582015260008251611d9181600e850160208701611ad1565b91909101600e019392505050565b600060208284031215611db157600080fd5b815167ffffffffffffffff811115611dc857600080fd5b8201601f81018413611dd957600080fd5b8051611de76117e28261177d565b818152856020838501011115611dfc57600080fd5b611e0d826020830160208601611ad1565b95945050505050565b815160009082906020808601845b83811015611e4057815185529382019390820190600101611e24565b50929695505050505050565b82815260008251611e64816020850160208701611ad1565b919091016020019392505050565b60008451611e84818460208901611ad1565b82018481528351611e9c816020808501908801611ad1565b0160200195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea26469706673582212201049998f06e91c628256ff7d55a834615e54a08ccb3deedef1b99c9784562cfa64736f6c634300080a0033";

type OrderBookStateBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OrderBookStateBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OrderBookStateBuilder__factory extends ContractFactory {
  constructor(...args: OrderBookStateBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OrderBookStateBuilder> {
    return super.deploy(overrides || {}) as Promise<OrderBookStateBuilder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OrderBookStateBuilder {
    return super.attach(address) as OrderBookStateBuilder;
  }
  connect(signer: Signer): OrderBookStateBuilder__factory {
    return super.connect(signer) as OrderBookStateBuilder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderBookStateBuilderInterface {
    return new utils.Interface(_abi) as OrderBookStateBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderBookStateBuilder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OrderBookStateBuilder;
  }
}