import { LightningElement, api} from 'lwc';
export default class Modal extends LightningElement {
    @api open = false

    closeModal(){
        this.open = false
    }
}