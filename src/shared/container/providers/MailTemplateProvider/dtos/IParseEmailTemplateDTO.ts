interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseEmailTemaplateDTO {
  template: string;
  variables: ITemplateVariables;
}
