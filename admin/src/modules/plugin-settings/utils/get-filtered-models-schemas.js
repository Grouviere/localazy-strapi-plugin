const SUPPORTED_CONTENT_TYPE_FIELDS = [
  "string",
  "text",
  "richtext",
  // "relation", // relation cannot be supported field type
  "component",
];

export default (models) => {
  if (!models) {
    return [];
  }

  return models.map((model) => {
    const attributesKeys = Object.keys(model.__schema__.attributes);

    const attributes = attributesKeys.map((attributeKey) => {
      const type = model.__schema__.attributes[attributeKey].type;

      if (!SUPPORTED_CONTENT_TYPE_FIELDS.includes(type.toLowerCase())) {
        return null;
      }

      return attributeKey;
    });

    return {
      modelUid: model.uid,
      collectionName: model.collectionName,
      displayName: model.info.displayName,
      attributes: attributes.filter((attribute) => !!attribute),
    };
  });
};
