package com.indix.bootcamp.parser

import com.indix.bootcamp.models.{Product, Price, Result}
import org.jsoup.nodes.Document
import com.indix.bootcamp.utils.Utils.Managed

/*************************FLIPKART***********************************/
class FlipkartParser extends Parser {
  override def parseProduct(document: Document, pageUrl: String): Product = {
    val title = document.select("h1[itemprop=name]").text()
    val description = document.select("div[class=productSpecs specSection]").text()
    Product(title, description, pageUrl)
  }

  // TODO: Fix the price Extraction
  override def parsePrice(document: Document): Price = {
    val listPrice = Managed(document.select("span[class=price]").text().replace(",","").replace("Rs. ","").toDouble)
    val salePrice = Managed(document.select("span[class=selling-price omniture-field]").attr("data-evar48").toDouble)
    Price(listPrice.getOrElse(-1), salePrice.getOrElse(-1))
  }
}


/****************************SNAPDEAL*********************************/
class SnapdealParser extends Parser {
  override def parseProduct(document: Document, pageUrl: String): Product = {
    val title = document.select("h1[itemprop=name]").text()
    val description = document.select("div[class=detailssubbox]").text()
    Product(title, description, pageUrl)
  }

  // TODO: Fix the price Extraction
  override def parsePrice(document: Document): Price = {
    val listPrice = Managed(document.select("span[id=original-price-id]").text().toDouble)
    val salePrice = Managed(document.select("span[id=selling-price-id]").text().toDouble)
    Price(listPrice.getOrElse(-1), salePrice.getOrElse(-1))
  }
}


/******************************JABONG**********************************/
class JabongParser extends Parser {
  override def parseProduct(document: Document, pageUrl: String): Product = {
    val title = document.select("span[itemprop=brand]").text()+" "+document.select("span[itemprop=name]").text()
    val description = document.select("div[id=productInfo]").text()
    Product(title, description, pageUrl)
  }

  override def parsePrice(document: Document): Price = {
    val listPrice = Managed(document.select("span[class=striked-price fs14 c222 d-inline mt5]").text().replace("Rs. ","").toDouble)
    val salePrice = Managed(document.select("span[itemprop=price]").text().toDouble)
    Price(listPrice.getOrElse(-1), salePrice.getOrElse(-1))
  }
}
