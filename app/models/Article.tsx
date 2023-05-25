import { Section } from "@/app/models/Section";

export interface Article {
  title: string;
  sections: Section[];
}
