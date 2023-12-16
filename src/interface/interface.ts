import { Ref } from "react";

export interface IDesktopNavbarItemProps {
  handleScrollToSection: (sectionKey: string, index?: number) => void;
}
export interface INavbarProps {
  handleScrollToSection: (sectionKey: string, index?: number) => void;
}
export interface IMobileNavbarItemProps {
  handleScrollToSection: (sectionKey: string, index?: number) => void;
}
export interface ICardContent {
    title: string;
    content: string;
    id: string;
    backgroundImage: string;
  }
  export interface ICardsContent {
    cardContent: ICardContent;
    ref: Ref<HTMLDivElement> | undefined;
  }
  