package controllers

import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

import play.api._
import play.api.mvc._
import play.api.Play.current

import play.api.libs.json._
import play.api.libs.functional.syntax._

import play.modules.reactivemongo.ReactiveMongoPlugin
import play.modules.reactivemongo.json.collection.JSONCollection
import play.autosource.reactivemongo._

import models.<%= prompts.name %>

object <%= prompts.name %>s extends ReactiveMongoAutoSourceController[<%= prompts.name %>] {
  val coll = ReactiveMongoPlugin.db.collection[JSONCollection]("<%= prompts.name.toLowerCase() %>")
