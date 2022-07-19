import { Address, BigInt } from "@graphprotocol/graph-ts";
import { ADDRESS_ZERO } from "@protofire/subgraph-toolkit";
import { Collection, NFT } from "../generated/schema";

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

