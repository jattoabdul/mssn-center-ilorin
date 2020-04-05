require('dotenv').config();

const {
  File,
  Text,
  Slug,
  Relationship,
  Select,
  Password,
  Checkbox,
  CalendarDay,
  CloudinaryImage,
  DateTime,
  OEmbed,
} = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
// const { AuthedRelationship } = require('@keystonejs/fields-authed-relationship');
// const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
// const getYear = require('date-fns/get_year');

const dev = process.env.NODE_ENV !== 'production';

// let iframelyAdapter;

// if (process.env.IFRAMELY_API_KEY) {
//   const { IframelyOEmbedAdapter } = require('@keystonejs/oembed-adapters');
//   iframelyAdapter = new IframelyOEmbedAdapter({
//     apiKey: process.env.IFRAMELY_API_KEY,
//   });
// }

const avatarFileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'avatars'
});

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'uploads'
});

// TODO: Add Authentication using Author as User
exports.Author = {
  fields: {
    name: { type: Text },
    email: { type: Text, isUnique: true },
    bio: { type: Wysiwyg },
    password: { type: Password },
    isAdmin: { type: Checkbox },
    avatar: {
      type: CloudinaryImage,
      adapter: avatarFileAdapter
    },
  },
  labelResolver: item => `${item.name} <${item.email}>`,
};

// const isAdmin = ({ authentication: { item: author } }) => !!author && !!author.isAdmin;

exports.Post = {
  fields: {
    title: { type: Text },
    slug: { type: Slug, from: 'title' },
    author: {
      type: Relationship,
      ref: 'Author',
      isRequired: true
    },
    // author: {
    //   type: AuthedRelationship,
    //   ref: 'Author',
    //   isRequired: true,
    //   access: {
    //     create: isAdmin,
    //     update: isAdmin,
    //   },
    // },
    categories: {
      type: Relationship,
      ref: 'PostCategory',
      many: true,
    },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    headline: { type: Wysiwyg },
    body: { type: Wysiwyg },
    posted: { type: DateTime, format: 'DD/MM/YYYY' },
    image: {
      type: CloudinaryImage,
      adapter: fileAdapter
    },
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'title, status',
    defaultSort: 'title',
  },
  labelResolver: item => item.title,
};

exports.PostCategory = {
  fields: {
    name: { type: Text },
    slug: { type: Slug, from: 'name' },
  },
};

exports.Todo = {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
};

// TODO: Add Comments

// exports.Comment = {
//   fields: {
//     body: { type: Text, isMultiline: true },
//     originalPost: {
//       type: Relationship,
//       ref: 'Post',
//     },
//     author: {
//       type: AuthedRelationship,
//       ref: 'User',
//       isRequired: true,
//       access: {
//         create: isAdmin,
//         update: isAdmin,
//       },
//     },
//     posted: { type: DateTime },
//   },
//   labelResolver: item => item.body,
// };


