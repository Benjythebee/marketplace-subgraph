import { ZERO_ADDRESS } from '@protofire/subgraph-toolkit'

import {
  CancelSale,
  NewListing,
  Sale,
  SaleWithToken,
} from "../generated/Marketplace/Marketplace"
import { ListingEntity, SalesEntity } from "../generated/schema"

enum Status {
  Listed = "listed",
  Sold = "sold",
  Cancelled = "cancelled"
}

export function handleCancelSale(event: CancelSale): void {
  const listingId = event.params.listingId
  let entity = ListingEntity.load(listingId.toHex())

  if (entity) {
    entity.status = Status.Cancelled

    entity.save()
  }
}

export function handleNewListing(event: NewListing): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  const listingId = event.params.listingId
  let entity = ListingEntity.load(listingId.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ListingEntity(listingId.toHex())
  }

  // Entity fields can be set based on event parameters
  entity.seller = event.params.seller.toString();
  entity.contractAddress = event.params.contractAddress.toString();
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.quantity = event.params.quantity
  entity.acceptedPayment = event.params.acceptedPayment.toString();
  entity.status = Status.Listed

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

export function handleSale(event: Sale): void {
  const id = event.transaction.hash.toString() + "-" + event.logIndex.toString();
  const entity = new SalesEntity(id)

  // Entity fields can be set based on event parameters
  entity.seller = event.params.seller.toString()
  entity.buyer = event.params.buyer.toString()
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.listingId = event.params.listingId
  // entity.contractAddress = event.params.contractAddress
  // entity.quantity = event.params.quantity
  // entity.acceptedPayment = ZERO_ADDRESS

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleSaleWithToken(event: SaleWithToken): void {
  const listingId = event.params.listingId
  let entity = SalesEntity.load(listingId.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new SalesEntity(listingId.toHex())
  }

  // Entity fields can be set based on event parameters
  entity.seller = event.params.seller.toString()
  entity.buyer = event.params.buyer.toString()
  entity.contractAddress = event.params.contractAddress.toString()
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.listingId = event.params.listingId
  // entity.quantity = event.params.quantity
  // entity.acceptedPayment = event.params.acceptedPayment

  // Entities can be written to the store with `.save()`
  entity.save()
}
