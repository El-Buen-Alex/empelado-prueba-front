import { Injectable } from "@angular/core";
import { DataService } from "./DataService.service";

@Injectable()

export class CantonesService{
    constructor(private DataService:DataService){}
    getCantonesById(id:number){
        return this.DataService.getCantonesById(id);
    }
    getProvinciaByIdCanton(id:number){
        return this.DataService.getProvinciaByIdCanton(id);
    }
}