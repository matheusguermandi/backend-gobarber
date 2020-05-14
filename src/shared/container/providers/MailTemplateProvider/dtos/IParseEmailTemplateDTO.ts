interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseEmailTemaplateDTO {
  file: string;
  variables: ITemplateVariables;
}
