// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *CallToAction → Items*
 */
export interface CallToActionSliceDefaultItem {
  /**
   * title field in *CallToAction → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Escribe el titulo para esta seccion
   * - **API ID Path**: call_to_action.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *CallToAction → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * planLink field in *CallToAction → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Boton para ver los paquetes (planes de pago)
   * - **API ID Path**: call_to_action.items[].planlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  planlink: prismic.LinkField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CallToActionSliceDefaultItem>
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultItem,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
