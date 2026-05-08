export default {
  name: 'gallery',
  type: 'document',
  title: 'Galeria',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required().min(3).error('Opis musi mieć co najmniej 10 znaków.'),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Opis zdjęcia',
      validation: (Rule) => Rule.required().min(10).error('Opis musi mieć co najmniej 10 znaków.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Kategoria',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Łazienki', value: 'bathrooms'},
          {title: 'Kuchnie', value: 'kitchens'},
          {title: 'Pokoje', value: 'rooms'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Plik',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
}
