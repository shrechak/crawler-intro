package com.indix.bootcamp.parser

import com.indix.bootcamp.utils.TestUtils
import com.indix.bootcamp.utils.TestUtils
import org.scalatest.{Matchers, FunSuite}

class JabongParserTest extends FunSuite with Matchers with TestUtils {

  test("should parse product page") {
    val document = readDocument("/jabong/jabong_1.html")
    val parser = new JabongParser
    val parsedProduct = parser.parseProduct(document, "http://www.jabong.com/Nike-Blue-Backpack-674692.html")
    parsedProduct.name should include("Blue Backpack")
    parsedProduct.description should include("Product Info & Care")
  }

  test("should parse prices from product page") {
    val document = readDocument("/jabong/jabong_1.html")
    val parser = new JabongParser
    val parsedPrice = parser.parsePrice(document)
    parsedPrice.listPrice should be(2695.0)
    parsedPrice.salePrice should be(1617.0)
  }
}