import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseEmailTemplateDTO from '../dtos/IParseEmailTemplateDTO';

export default class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseEmailTemplateDTO): Promise<string> {
    return template;
  }
}
