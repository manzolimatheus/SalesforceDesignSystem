import { api, LightningElement } from 'lwc';

export default class Card extends LightningElement {
    @api title = 'Card';
    @api description = 'Card description';
    @api footer = 'Card footer';
    @api icon = 'standard:account';
}