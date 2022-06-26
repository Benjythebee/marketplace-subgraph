// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  Address,
} from "@graphprotocol/graph-ts";

export class ListingEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ListingEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ListingEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ListingEntity", id.toString(), this);
    }
  }

  static load(id: string): ListingEntity | null {
    return changetype<ListingEntity | null>(store.get("ListingEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value!.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value!.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get acceptedPayment(): string {
    let value = this.get("acceptedPayment");
    return value!.toString();
  }

  set acceptedPayment(value: string) {
    this.set("acceptedPayment", Value.fromString(value));
  }

  get status(): bool {
    let value = this.get("status");
    return value!.toBoolean();
  }

  set status(value: bool) {
    this.set("status", Value.fromBoolean(value));
  }
}

export class SalesEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SalesEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SalesEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SalesEntity", id.toString(), this);
    }
  }

  static load(id: string): SalesEntity | null {
    return changetype<SalesEntity | null>(store.get("SalesEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value!.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get buyer(): string {
    let value = this.get("buyer");
    return value!.toString();
  }

  set buyer(value: string) {
    this.set("buyer", Value.fromString(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value!.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get acceptedPayment(): Address {
    let value = this.get("acceptedPayment");
    return value!.toAddress();
  }

  set acceptedPayment(value: Address) {
    this.set("acceptedPayment", Value.fromAddress(value));
  }
 
  get listingId(): Bytes {
    let value = this.get("listingId");
    return value!.toBytes();
  }

  set listingId(value: Bytes) {
    this.set("listingId", Value.fromBytes(value));
  }
}
