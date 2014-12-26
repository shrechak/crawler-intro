package com.indix.bootcamp.parser

import com.indix.bootcamp.models.{Product, Price, Result}
import org.jsoup.nodes.Document

/*************************FLIPKART***********************************/
class FlipkartParser extends Parser {
  override def parseProduct(document: Document, pageUrl: String): Product = {
    val title = document.select("h1[itemprop=name]").text()
    val description = document.select("div[class=productSpecs specSection]").text()
    Product(title, description, pageUrl)
  }

  // TODO: Fix the price Extraction
  override def parsePrice(document: Document): Price = {
    val listPrice = document.select("span[class=price]").text().replace(",","").replace("Rs. ","").toDouble
    val salePrice = document.select("span[class=selling-price omniture-field]").attr("data-evar48").toDouble
    Price(listPrice, salePrice)
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
    val listPrice = document.select("span[id=original-price-id]").text().toDouble
    val salePrice = document.select("span[id=selling-price-id]").text().toDouble
    Price(listPrice, salePrice)
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
    val listPrice = document.select("span[class=striked-price]").text().replace("Rs. ","").toDouble
    val salePrice = document.select("span[itemprop=price]").text().toDouble
    println(listPrice)
    Price(listPrice, salePrice)
  }
}
