export enum SelectValues {
  DEFAULT = 'Choose country',
  RUSSIAN = 'Russian',
  BELARUSIAN = 'Belarusian',
  UKRAINE = 'Ukraine',
  OTHER = 'Other',
}

export enum FormErrorMessage {
  NAME_ERROR = 'Not valid name',
  LAST_NAME_ERROR = 'Not valid last name',
  RULES_ERROR = 'Disagree with the rules',
  GENDER_ERROR = 'Choose gender',
  FILE_ERROR = 'Upload a photo please',
  BIRTHDAY_ERROR = "You haven't been born yet?",
  COUNTRY_ERROR = 'Choose country please',
}

export enum FormInputValues {
  USER_NAME = 'Name',
  LAST_NAME = 'Last name',
  BIRTHDAY = 'Birthday',
}

export enum InputTypes {
  TEXT = 'text',
  DATE = 'date',
  FILE = 'file',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}

export enum ValidateValues {
  NAME = 'name',
  LAST_NAME = 'lastName',
  BIRTHDAY = 'birthday',
  COUNTRY = 'country',
  GENDER = 'gender',
  IMAGE = 'image',
  RULES = 'rules',
}
