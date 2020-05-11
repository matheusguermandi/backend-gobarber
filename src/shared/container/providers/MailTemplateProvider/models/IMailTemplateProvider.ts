import IParseEmailTemplateDTO from '../dtos/IParseEmailTemplateDTO';

export default interface IMailTemplateProvider {
  parseTemplate(data: IParseEmailTemplateDTO): Promise<string>;
}
