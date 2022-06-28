import { LightningElement, api, track } from 'lwc';
export default class Button extends LightningElement {
    @api shape = "rect"
    @api bgColor = "cornflowerblue"
    @api color = "white"
    @api animation = ""
    @track classes = ""
    @track style = ""
    
    renderedCallback(){
        this.classes = `button ${this.shape} ${this.animation}`
        this.style = `background-color: ${this.bgColor}; color: ${this.color}`
    }
     
}