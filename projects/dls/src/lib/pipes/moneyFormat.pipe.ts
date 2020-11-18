import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'MoneyFormat'
})

export class MoneyFormatPipe implements PipeTransform {
    transform(numero: string): any {
        if (numero === '') { return; }
        if (numero.indexOf('.') >= 0) {
            const decimalPos = numero.indexOf('.');
            let leftSide = numero.substring(0, decimalPos);
            let rightSide = numero.substring(decimalPos);
            leftSide = this.formatNumber(leftSide);
            rightSide = this.formatNumber(rightSide);
            rightSide = rightSide.substring(0, 2);
            numero = leftSide + '.' + rightSide;

        } else {
            numero = this.formatNumber(numero);
            numero = numero;
        }
        return '$' + numero;
    }
    formatNumber(n) {
        return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
