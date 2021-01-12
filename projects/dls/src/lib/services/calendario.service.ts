import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalendarioService {

    constructor() { }

    fechas: any;

    motivo: string;

    colors: any = {
        red: {
            primary: '#fbbdb8',
            secondary: '#fbbdb8'
        },
        blue: {
            primary: '#1e90ff',
            secondary: '#D1E8FF'
        },
        yellow: {
            primary: '#e3bc08',
            secondary: '#FDF1BA'
        }
    };
    actions: any[] = [
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            name: 'delete'
        },
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            name: 'edit'
        }
    ];

    events: any = [
        {
            start: new Date(2021, 0, 7),
            end: new Date(2021, 0, 10),
            title: 'title event 1',
            color: this.colors.red,
            actions: this.actions,
            status: true,
            motivo: 'motivo 1'
        },
        {
            start: new Date(2021, 0, 8),
            end: new Date(2021, 0, 10),
            title: 'title event 1',
            color: this.colors.red,
            actions: this.actions,
            status: true,
            motivo: 'motivo 2'
        },
        {
            start: new Date(2021, 0, 9),
            end: new Date(2021, 0, 10),
            title: 'title event 1',
            color: this.colors.red,
            actions: this.actions,
            status: true,
            motivo: 'motivo 3'
        },
        {
            start: new Date(2021, 0, 10),
            end: new Date(2021, 0, 10),
            title: 'title event 1',
            color: this.colors.red,
            actions: this.actions,
            status: true,
            motivo: 'motivo 4'
        },
        {
            start: new Date(2021, 11, 20),
            end: new Date(2021, 11, 20),
            title: 'title event 2',
            color: this.colors.yellow,
            actions: this.actions,
            status: true,
            motivo: 'motivo 5'
        },
        {
            start: new Date(2021, 10, 20),
            end: new Date(2021, 10, 20),
            title: 'title event 2',
            color: this.colors.yellow,
            actions: this.actions,
            status: true,
            motivo: 'motivo 6'
        }
    ]

}
