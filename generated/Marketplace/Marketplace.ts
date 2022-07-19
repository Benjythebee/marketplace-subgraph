// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CancelSale extends ethereum.Event {
  get params(): CancelSale__Params {
    return new CancelSale__Params(this);
  }
}

export class CancelSale__Params {
  _event: CancelSale;

  constructor(event: CancelSale) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get listingId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class NewListing extends ethereum.Event {
  get params(): NewListing__Params {
    return new NewListing__Params(this);
  }
}

export class NewListing__Params {
  _event: NewListing;

  constructor(event: NewListing) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get listingId(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get acceptedPayment(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Sale extends ethereum.Event {
  get params(): Sale__Params {
    return new Sale__Params(this);
  }
}

export class Sale__Params {
  _event: Sale;

  constructor(event: Sale) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get listingId(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class SaleWithToken extends ethereum.Event {
  get params(): SaleWithToken__Params {
    return new SaleWithToken__Params(this);
  }
}

export class SaleWithToken__Params {
  _event: SaleWithToken;

  constructor(event: SaleWithToken) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get contractAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get listingId(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Marketplace__getListingResultValue0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get contractAddress(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get quantity(): BigInt {
    return this[4].toBigInt();
  }

  get acceptedPayment(): Address {
    return this[5].toAddress();
  }
}

export class Marketplace__getListingAtIndexResultValue0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get contractAddress(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get quantity(): BigInt {
    return this[4].toBigInt();
  }

  get acceptedPayment(): Address {
    return this[5].toAddress();
  }
}

export class Marketplace__getListingsResultValue0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get contractAddress(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get quantity(): BigInt {
    return this[4].toBigInt();
  }

  get acceptedPayment(): Address {
    return this[5].toAddress();
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  IID_IERC1155(): Bytes {
    let result = super.call("IID_IERC1155", "IID_IERC1155():(bytes4)", []);

    return result[0].toBytes();
  }

  try_IID_IERC1155(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("IID_IERC1155", "IID_IERC1155():(bytes4)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  IID_IERC721(): Bytes {
    let result = super.call("IID_IERC721", "IID_IERC721():(bytes4)", []);

    return result[0].toBytes();
  }

  try_IID_IERC721(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("IID_IERC721", "IID_IERC721():(bytes4)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getListing(id: Bytes): Marketplace__getListingResultValue0Struct {
    let result = super.call(
      "getListing",
      "getListing(bytes32):((address,address,uint256,uint256,uint256,address))",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return changetype<Marketplace__getListingResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getListing(
    id: Bytes
  ): ethereum.CallResult<Marketplace__getListingResultValue0Struct> {
    let result = super.tryCall(
      "getListing",
      "getListing(bytes32):((address,address,uint256,uint256,uint256,address))",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Marketplace__getListingResultValue0Struct>(value[0].toTuple())
    );
  }

  getListingAtIndex(
    index: BigInt
  ): Marketplace__getListingAtIndexResultValue0Struct {
    let result = super.call(
      "getListingAtIndex",
      "getListingAtIndex(uint256):((address,address,uint256,uint256,uint256,address))",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return changetype<Marketplace__getListingAtIndexResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getListingAtIndex(
    index: BigInt
  ): ethereum.CallResult<Marketplace__getListingAtIndexResultValue0Struct> {
    let result = super.tryCall(
      "getListingAtIndex",
      "getListingAtIndex(uint256):((address,address,uint256,uint256,uint256,address))",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Marketplace__getListingAtIndexResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getListingCount(): BigInt {
    let result = super.call(
      "getListingCount",
      "getListingCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getListingCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getListingCount",
      "getListingCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getListingIdAtIndex(index: BigInt): Bytes {
    let result = super.call(
      "getListingIdAtIndex",
      "getListingIdAtIndex(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toBytes();
  }

  try_getListingIdAtIndex(index: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getListingIdAtIndex",
      "getListingIdAtIndex(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getListings(): Array<Marketplace__getListingsResultValue0Struct> {
    let result = super.call(
      "getListings",
      "getListings():((address,address,uint256,uint256,uint256,address)[])",
      []
    );

    return result[0].toTupleArray<Marketplace__getListingsResultValue0Struct>();
  }

  try_getListings(): ethereum.CallResult<
    Array<Marketplace__getListingsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getListings",
      "getListings():((address,address,uint256,uint256,uint256,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Marketplace__getListingsResultValue0Struct>()
    );
  }

  isERC1155(_address: Address): boolean {
    let result = super.call("isERC1155", "isERC1155(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_isERC1155(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isERC1155", "isERC1155(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isERC721(_address: Address): boolean {
    let result = super.call("isERC721", "isERC721(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_isERC721(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isERC721", "isERC721(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isExistId(id: Bytes): boolean {
    let result = super.call("isExistId", "isExistId(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(id)
    ]);

    return result[0].toBoolean();
  }

  try_isExistId(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isExistId", "isExistId(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  list(
    nftAddress: Address,
    tokenId: BigInt,
    price: BigInt,
    quantity: BigInt,
    acceptedPayment: Address
  ): Bytes {
    let result = super.call(
      "list",
      "list(address,uint256,uint256,uint256,address):(bytes32)",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromUnsignedBigInt(quantity),
        ethereum.Value.fromAddress(acceptedPayment)
      ]
    );

    return result[0].toBytes();
  }

  try_list(
    nftAddress: Address,
    tokenId: BigInt,
    price: BigInt,
    quantity: BigInt,
    acceptedPayment: Address
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "list",
      "list(address,uint256,uint256,uint256,address):(bytes32)",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromUnsignedBigInt(quantity),
        ethereum.Value.fromAddress(acceptedPayment)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  maxPrice(): BigInt {
    let result = super.call("maxPrice", "maxPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxPrice", "maxPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minPrice(): BigInt {
    let result = super.call("minPrice", "minPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minPrice", "minPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  trustedForwarder(): Address {
    let result = super.call(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_trustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  versionRecipient(): string {
    let result = super.call(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );

    return result[0].toString();
  }

  try_versionRecipient(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class BuyWithTokenCall extends ethereum.Call {
  get inputs(): BuyWithTokenCall__Inputs {
    return new BuyWithTokenCall__Inputs(this);
  }

  get outputs(): BuyWithTokenCall__Outputs {
    return new BuyWithTokenCall__Outputs(this);
  }
}

export class BuyWithTokenCall__Inputs {
  _call: BuyWithTokenCall;

  constructor(call: BuyWithTokenCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyWithTokenCall__Outputs {
  _call: BuyWithTokenCall;

  constructor(call: BuyWithTokenCall) {
    this._call = call;
  }
}

export class CancelListCall extends ethereum.Call {
  get inputs(): CancelListCall__Inputs {
    return new CancelListCall__Inputs(this);
  }

  get outputs(): CancelListCall__Outputs {
    return new CancelListCall__Outputs(this);
  }
}

export class CancelListCall__Inputs {
  _call: CancelListCall;

  constructor(call: CancelListCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CancelListCall__Outputs {
  _call: CancelListCall;

  constructor(call: CancelListCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _registryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _forwarder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ListCall extends ethereum.Call {
  get inputs(): ListCall__Inputs {
    return new ListCall__Inputs(this);
  }

  get outputs(): ListCall__Outputs {
    return new ListCall__Outputs(this);
  }
}

export class ListCall__Inputs {
  _call: ListCall;

  constructor(call: ListCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get acceptedPayment(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ListCall__Outputs {
  _call: ListCall;

  constructor(call: ListCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMaxCall extends ethereum.Call {
  get inputs(): SetMaxCall__Inputs {
    return new SetMaxCall__Inputs(this);
  }

  get outputs(): SetMaxCall__Outputs {
    return new SetMaxCall__Outputs(this);
  }
}

export class SetMaxCall__Inputs {
  _call: SetMaxCall;

  constructor(call: SetMaxCall) {
    this._call = call;
  }

  get t(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxCall__Outputs {
  _call: SetMaxCall;

  constructor(call: SetMaxCall) {
    this._call = call;
  }
}

export class SetMinCall extends ethereum.Call {
  get inputs(): SetMinCall__Inputs {
    return new SetMinCall__Inputs(this);
  }

  get outputs(): SetMinCall__Outputs {
    return new SetMinCall__Outputs(this);
  }
}

export class SetMinCall__Inputs {
  _call: SetMinCall;

  constructor(call: SetMinCall) {
    this._call = call;
  }

  get t(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinCall__Outputs {
  _call: SetMinCall;

  constructor(call: SetMinCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateTokenRegistryCall extends ethereum.Call {
  get inputs(): UpdateTokenRegistryCall__Inputs {
    return new UpdateTokenRegistryCall__Inputs(this);
  }

  get outputs(): UpdateTokenRegistryCall__Outputs {
    return new UpdateTokenRegistryCall__Outputs(this);
  }
}

export class UpdateTokenRegistryCall__Inputs {
  _call: UpdateTokenRegistryCall;

  constructor(call: UpdateTokenRegistryCall) {
    this._call = call;
  }

  get _newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTokenRegistryCall__Outputs {
  _call: UpdateTokenRegistryCall;

  constructor(call: UpdateTokenRegistryCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
