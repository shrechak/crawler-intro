package com.indix.bootcamp.parser

import com.indix.bootcamp.models.{Product, Price, Result}
import org.jsoup.nodes.Document

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

class JabongParser extends Parser {
  override def parseProduct(document: Document, pageUrl: String): Product = ???

  override def parsePrice(document: Document): Price = ???
}
