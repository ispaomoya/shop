import {request} from './request'
export function getdetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({    
        url: '/recommend'
    })
}

export class goods {
    constructor(iteminfo, columns, services) {
        this.title = iteminfo.title
        this.desc = iteminfo.desc
        this.newPrice = iteminfo.price
        this.oldPrice = iteminfo.oldPrice
        this.discount = iteminfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = iteminfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }

}

export class GoodsParam {
    constructor(info, rule) {
      // 注：images可能没有值(某些商品优质，某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
}