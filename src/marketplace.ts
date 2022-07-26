import { ADDRESS_ZERO, ZERO_ADDRESS } from '@protofire/subgraph-toolkit'

import {
  CancelSale,
  NewListing,
  Sale,
  SaleWithToken,
} from "../generated/Marketplace/Marketplace"
import { ListingEntity, SalesEntity } from "../generated/schema"
import { BigInt, log, store } from '@graphprotocol/graph-ts'
import { genListingId, getPaymentToken } from './helpers'
export function handleCancelSale(event: CancelSale): void {
  const listingId = event.params.listingId
  const listingIndex = event.params.listingIndex
  const id=  genListingId(listingId,listingIndex)
  let entity = ListingEntity.load(id)
  if(entity){
    store.remove('ListingEntity',id)
  }
}

export function handleNewListing(event: NewListing): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  const listingId = event.params.listingId
  let entity = ListingEntity.load(listingId.toHex())
  if (entity == null) {
    entity = new ListingEntity(listingId.toHex())
  }

  let paymentToken = getPaymentToken(entity.acceptedPayment.)

  // Entity fields can be set based on event parameters
  entity.seller = event.params.seller.toString();
  entity.contractAddress = event.params.contractAddress.toString();
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.quantity = event.params.quantity
  entity.acceptedPayment = event.params.acceptedPayment.toString();

  // Entities can be written to the store with `.save()`
  entity.save()

}

export function handleSale(event: Sale): void {
  const listingId = event.params.listingId
  const listingIndex = event.params.listingIndex
  const quantity = event.params.quantity
  const saleDate = event.params.saleDate
  const id= genListingId(listingId,listingIndex)
  const saleId=  id+'@'+saleDate.toString()
  let entity = ListingEntity.load(id)

  if(entity == null){
    log.info('Entity {} does not exist',[id])
    return
  }

  let sale = SalesEntity.load(saleId)
  if(sale==null){
    sale = new SalesEntity(saleId)
    sale.buyer=ADDRESS_ZERO
    sale.listing = entity.id
    sale.quantity = quantity
    sale.save()
  }

  let q = entity.quantity
  // Entity fields can be set based on event parameters
  if(quantity > q){
    q = BigInt.zero()
  }else if(q!=BigInt.zero()){
    q = q.minus(quantity)
  }
  entity.quantity = q

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleSaleWithToken(event: SaleWithToken): void {
  const listingId = event.params.listingId
  const listingIndex = event.params.listingIndex
  const quantity = event.params.quantity
  const saleDate = event.params.saleDate
  const id=  listingId.toHex()+':'+listingIndex.toString()
  const saleId=  id+'@'+saleDate.toString()
  let entity = ListingEntity.load(id)

  if(entity == null){
    log.info('Entity {} does not exist',[id])
    return
  }

  let sale = SalesEntity.load(saleId)
  if(sale==null){
    sale = new SalesEntity(saleId)
    sale.acceptedPayment=entity.acceptedPayment
    sale.buyer=ADDRESS_ZERO
    sale.contractAddress=entity.contractAddress
    sale.listingId=event.params.listingId
    sale.price = entity.price
    sale.quantity = quantity
    sale.save()
  }

  let q = entity.quantity
  // Entity fields can be set based on event parameters
  if(quantity > q){
    q = BigInt.zero()
  }else if(q!=BigInt.zero()){
    q = q.minus(quantity)
  }
  entity.quantity = q

  // Entities can be written to the store with `.save()`
  entity.save()
}
