Intrests = new Mongo.Collection("intrests");

Intrests.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title of Intrests",
    min: 2,
    max: 200,
    optional: false
  }
}));
