package com.indix.bootcamp.parser

import com.indix.bootcamp.utils.TestUtils
import org.scalatest.{Matchers, FunSuite}

class SnapdealParserTest extends FunSuite with Matchers with TestUtils {

  test("should parse product page") {
    val document = readDocument("/snapdeal/snapdeal_1.html")
    val parser = new SnapdealParser
    val parsedProduct = parser.parseProduct(document, "http://www.snapdeal.com/product/karbonn-titanium-s3-black/199999435?")
    parsedProduct.name should be("Karbonn Titanium S3 (Black)")
    parsedProduct.description should include("Product Summary of Karbonn Titanium S3 (Black)")
  }

  test("should parse prices from product page") {
    val document = readDocument("/snapdeal/snapdeal_1.html")
    val parser = new SnapdealParser
    val parsedPrice = parser.parsePrice(document)
    parsedPrice.listPrice should be(8500.0)
    parsedPrice.salePrice should be(5549.0)
  }
}