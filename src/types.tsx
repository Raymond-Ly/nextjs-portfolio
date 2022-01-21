import { Document } from "@contentful/rich-text-types";

export type ChildComponents = {
  children: any;
};

export type ContentfulProps = {
  hero: ContentfulEntry<HeroProps>;
}

interface ContentfulEntry<T=string> {
  fields: T
}

type HeroProps = {
  title: string;
  intro: Document;
}
