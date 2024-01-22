export enum LetterState {
  OK = 'V',
  NOK = 'X',
  MISPLACED = '_'
}

export interface ApiWord {
  name: string,
  categorie: string
}

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

export interface Message {
  content: string;
  type: MessageType
}
