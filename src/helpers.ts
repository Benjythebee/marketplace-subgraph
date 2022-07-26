import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ADDRESS_ZERO } from "@protofire/subgraph-toolkit";
import { Collection, ListingEntity, NFT, PaymentToken, User } from "../generated/schema";

export function getCollection(address:Address):Collection{

    let collection = Collection.load(address.toHex())
    if (collection === null) {
        collection = new Collection(address.toHex());
        collection.price_floor=BigInt.zero();
        collection.save();
    }
    return collection
}

export function getNFT(address:Address,tokenId:BigInt):NFT{
    const token = address.toHex()+'@'+tokenId.toString()
    let nft = NFT.load(token)
    if (nft === null) {
        nft = new NFT(token);
        nft.token_id = tokenId
        nft.owner = ADDRESS_ZERO
        nft.collection = address.toHex()
        nft.save();
    }
    return nft
}


export function getUser(address:Address):User{
    const addr = address.toHex()
    let user = User.load(addr)
    if (user === null) {
        user = new User(addr);
        user.save();
    }
    return user
}

export function getPaymentToken(address:Address):PaymentToken{
    const addr = address.toHex()
    let payment = PaymentToken.load(addr)
    if (payment === null) {
        payment = new PaymentToken(addr);
        if(address.toHex() == ADDRESS_ZERO){
            payment.decimals=18
            payment.symbol = 'MATIC' // or MATIC on polygon
        }else{
            // Call contract to know symbol / decimals

        }
        payment.save();
    }
    return payment
}


export function genListingId(listingId:Bytes,index:BigInt):string{
    const id=  listingId.toHex()+':'+index.toString()
    return id
}