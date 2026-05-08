export const deskStructure = (S) =>
  S.list()
    .title('Zawartość strony')
    .items([
      S.listItem()
        .title('Galeria')
        .child(
          S.list()
            .title('Kategorie')
            .items([
              S.listItem()
                .title('Łazienki')
                .child(
                  S.documentList()
                    .title('Zdjęcia: Łazienki')
                    .filter('_type == "gallery" && category == "bathrooms"'),
                ),
              S.listItem()
                .title('Kuchnie')
                .child(
                  S.documentList()
                    .title('Zdjęcia: Kuchnie')
                    .filter('_type == "gallery" && category == "kitchens"'),
                ),
              S.listItem()
                .title('Pokoje')
                .child(
                  S.documentList()
                    .title('Zdjęcia: Pokoje')
                    .filter('_type == "gallery" && category == "rooms"'),
                ),
            ]),
        ),
      ...S.documentTypeListItems().filter((listItem) => !['gallery'].includes(listItem.getId())),
    ])
