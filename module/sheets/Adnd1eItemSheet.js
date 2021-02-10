export default class Adnd1eItemSheet extends ItemSheet {
  get template(){
    return `systems/adnd1e/templates/sheets/${this.item.data.type}-sheet.html`;
  }

  getData(){
    const data = super.getData();

    data.config = CONFIG.adnd1e;

    return data;
  }
}