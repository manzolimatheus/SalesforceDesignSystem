import { LightningElement } from 'lwc';

export default class WeatherCard extends LightningElement {

    url = 'https://api.weatherapi.com/v1/current.json?key=72a5449bd8aa4042934192245202211&q=Mogi-guacu'
    temp_c = 17
    weather = 'Chuvoso'
    image = 'https://icon-library.com/images/rainy-icon/rainy-icon-1.jpg'

}