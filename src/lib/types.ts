export interface GlobalProperties {
  id: string;
  text: string;
  visible: boolean;
  expandable: boolean;
  titleText: string;
  bodyText: string;
  modifiers: string;
  class: string;
  title: string;
  children: unknown;
}

// types.ts
export interface CardType {
  id: string;
  title: string;
  text: string;
  isVisible?: boolean;
}

export interface CardTitle {
  id: string;
  text: string;
}

export interface Card {
  id: string;
  text: string;
  title: string;
  cardTitle: CardTitle;
  isVisible?: boolean;
}

export interface CardState {
  isOpen?: boolean;
  isActive?: boolean;
  // Add other states
}

export interface CardProps {
  text?: string;
  id?: string;
  cardClass?: string;
  cardState?: CardState;
  children?: any[];
}