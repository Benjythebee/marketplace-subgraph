import { BigInt } from "@graphprotocol/graph-ts"
import {
  Marketplace,
  AdminChanged,
  BeaconUpgraded,
  CancelSale,
  Initialized,
  NewListing,
  OwnershipTransferred,
  Paused,
  Sale,
  SaleWithToken,
  Unpaused,
  Upgraded
} from "../generated/Marketplace/Marketplace"
import { ExampleEntity } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.IID_IERC1155(...)
  // - contract.IID_IERC721(...)
  // - contract.getListing(...)
  // - contract.getListingAtIndex(...)
  // - contract.getListingCount(...)
  // - contract.getListingIdAtIndex(...)
  // - contract.getListings(...)
  // - contract.isERC1155(...)
  // - contract.isERC721(...)
  // - contract.isExistId(...)
  // - contract.isTrustedForwarder(...)
  // - contract.list(...)
  // - contract.maxPrice(...)
  // - contract.minPrice(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.proxiableUUID(...)
  // - contract.supportsInterface(...)
  // - contract.trustedForwarder(...)
  // - contract.versionRecipient(...)
}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleCancelSale(event: CancelSale): void {}

export function handleInitialized(event: Initialized): void {}

export function handleNewListing(event: NewListing): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleSale(event: Sale): void {}

export function handleSaleWithToken(event: SaleWithToken): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleUpgraded(event: Upgraded): void {}
