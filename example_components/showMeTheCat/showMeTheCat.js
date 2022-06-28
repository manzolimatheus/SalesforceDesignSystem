import { LightningElement } from 'lwc';
export default class ShowMeTheCat extends LightningElement {

    modalOpen = false

    toggleModal(){
        this.modalOpen = !this.modalOpen
    }
}