
# Interface StateJSVM

- An interface, StateJS is basically javascript version of 'State' struct in RainVM, although it doesn't need stackLength and argumentsLength to operate. It receives a regular RainVM in the constructor and initiates the stack for it and all opcodes do their operations to the stack.

<b>Signature:</b>

```typescript
interface StateJSVM 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [argStack](./statejsvm.md#argStack-property) | `BigNumber[]` | Used only for zipmap opcode arguments |
|  [constants](./statejsvm.md#constants-property) | `BigNumber[]` | The property to store the RainVM script constants. |
|  [sources](./statejsvm.md#sources-property) | `Uint8Array[]` | The property to store the RainVM script sources. |
|  [stack](./statejsvm.md#stack-property) | `BigNumber[]` | The RainJSVM's stack. |

## Property Details

<a id="argStack-property"></a>

### argStack

Used only for zipmap opcode arguments

<b>Signature:</b>

```typescript
readonly argStack: BigNumber[];
```

<a id="constants-property"></a>

### constants

The property to store the RainVM script constants.

<b>Signature:</b>

```typescript
readonly constants: BigNumber[];
```

<a id="sources-property"></a>

### sources

The property to store the RainVM script sources.

<b>Signature:</b>

```typescript
readonly sources: Uint8Array[];
```

<a id="stack-property"></a>

### stack

The RainJSVM's stack.

<b>Signature:</b>

```typescript
readonly stack: BigNumber[];
```