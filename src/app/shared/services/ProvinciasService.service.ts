import { Injectable } from "@angular/core";
import { DataService } from "./DataService.service";


@Injectable()

export class ProvinciasService{

    constructor(private DataService:DataService){}

    getProvincias(){
        return this.DataService.getProvincias()
    }
}